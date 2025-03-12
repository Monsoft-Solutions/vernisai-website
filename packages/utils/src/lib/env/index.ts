import { z } from 'zod';

/**
 * Environment variable schema for client-side variables
 * These are variables that are exposed to the client-side code
 * and must be prefixed with VITE_
 */
export const clientEnvSchema = z.object({
    // Feature flags
    VITE_ENABLE_ANALYTICS: z
        .enum(['true', 'false'])
        .transform((val) => val === 'true')
        .default('false'),
    VITE_ENABLE_FEATURE_X: z
        .enum(['true', 'false'])
        .transform((val) => val === 'true')
        .default('false'),

    // Analytics and tracking
    VITE_GOOGLE_ANALYTICS_ID: z.string().optional(),
    VITE_MICROSOFT_CLARITY_ID: z.string().optional(),
});

/**
 * Environment variable schema for server-side variables
 * These are variables that are only available on the server
 */
export const serverEnvSchema = z.object({
    NODE_ENV: z
        .enum(['development', 'test', 'production'])
        .default('development'),
});

/**
 * Combined environment schema
 */
export const envSchema = serverEnvSchema.merge(clientEnvSchema);

/**
 * Type definition for the validated environment variables
 */
export type Env = z.infer<typeof envSchema>;
export type ClientEnv = z.infer<typeof clientEnvSchema>;
export type ServerEnv = z.infer<typeof serverEnvSchema>;

/**
 * Function to validate environment variables
 * @param env Object containing environment variables to validate
 * @returns Validated environment variables
 * @throws Error if validation fails
 */
export function validateEnv(env: Record<string, string | undefined>): Env {
    const parsed = envSchema.safeParse(env);

    if (!parsed.success) {
        console.error(
            '❌ Invalid environment variables:',
            parsed.error.flatten().fieldErrors,
        );
        throw new Error('Invalid environment variables');
    }

    return parsed.data;
}

/**
 * Function to extract and validate client-side environment variables
 * @param env Full environment object
 * @returns Client-side environment variables
 */
export function extractClientEnv(env: Env): ClientEnv {
    const clientEnvObj: Record<string, unknown> = {};

    // Extract all VITE_ prefixed variables
    Object.keys(env).forEach((key) => {
        if (key.startsWith('VITE_')) {
            clientEnvObj[key] = env[key as keyof Env];
        }
    });

    return clientEnvObj as ClientEnv;
}

/**
 * Validate that all required environment variables are present
 * This should be called when the application starts
 * @throws Error if any required environment variables are missing
 */
export function validateRequiredEnv(): void {
    try {
        // This will throw an error if validation fails
        validateEnv(process.env as Record<string, string | undefined>);
    } catch (error) {
        console.error('❌ Environment validation failed:', error);
        throw error;
    }
}
