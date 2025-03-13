import { z } from 'zod';

// Define schema for environment variables
export const envSchema = z.object({
    // Required variables
    VITE_API_URL: z.string().url(),

    // Optional variables with defaults
    VITE_DEBUG_MODE: z.enum(['true', 'false']).default('false'),
    VITE_APP_ENV: z
        .enum(['development', 'staging', 'production'])
        .default('development'),

    // Analytics (optional)
    VITE_GOOGLE_ANALYTICS_ID: z.string().optional(),
    VITE_MICROSOFT_CLARITY_ID: z.string().optional(),
});

// Create type from schema
export type Env = z.infer<typeof envSchema>;

// Parse and validate environment variables
const parseEnv = (): Env => {
    const rawEnv = {
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE,
        VITE_APP_ENV: import.meta.env.VITE_APP_ENV,
        VITE_GOOGLE_ANALYTICS_ID: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
        VITE_MICROSOFT_CLARITY_ID: import.meta.env.VITE_MICROSOFT_CLARITY_ID,
    };

    try {
        return envSchema.parse(rawEnv);
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error('❌ Environment validation failed:');
            console.error(error.format());
            throw new Error('Invalid environment configuration');
        }
        throw error;
    }
};

// Singleton pattern with lazy initialization
let envCache: Env | null = null;

/**
 * Get validated environment variables
 */
export const getEnv = (): Env => {
    if (!envCache) {
        envCache = parseEnv();
    }
    return envCache;
};

/**
 * Checks if current environment is production
 */
export const isProduction = (): boolean => {
    return getEnv().VITE_APP_ENV === 'production';
};

/**
 * Checks if current environment is development
 */
export const isDevelopment = (): boolean => {
    return getEnv().VITE_APP_ENV !== 'production';
};

/**
 * Checks if current environment is staging
 */
export const isStaging = (): boolean => {
    return getEnv().VITE_APP_ENV === 'staging';
};

/**
 * Checks if debug mode is enabled
 */
export const isDebugMode = (): boolean => {
    return getEnv().VITE_DEBUG_MODE === 'true';
};
