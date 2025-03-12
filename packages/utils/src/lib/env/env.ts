import {
    validateEnv,
    extractClientEnv,
    type Env,
    type ClientEnv,
} from './index';

/**
 * Load and validate environment variables
 * This should be imported and used instead of directly accessing process.env
 */

// Get all environment variables from process.env or Vite's import.meta.env
// We need to handle both Node.js and browser environments
let processEnv: Record<string, string | undefined>;

// Debug information to help troubleshoot environment issues
const isNode = typeof process !== 'undefined' && process.env;
const isVercel = typeof process !== 'undefined' && process.env?.VERCEL === '1';

// Check if we're in a browser environment with Vite
if (typeof process === 'undefined' || !process.env) {
    // We're in a browser environment, likely with Vite
    // Using a try-catch to handle potential reference errors
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const viteEnv = (globalThis as any).__VITE_ENV__ || {};

        // For debugging in development
        if (viteEnv.MODE === 'development') {
            console.warn(
                'Environment variables in browser:',
                Object.keys(viteEnv)
                    .filter((key) => key.startsWith('VITE_'))
                    .reduce(
                        (acc, key) => {
                            acc[key] = viteEnv[key] ? '[SET]' : '[NOT SET]';
                            return acc;
                        },
                        {} as Record<string, string>,
                    ),
            );
        }

        processEnv = viteEnv;
    } catch (error) {
        console.error('Failed to load Vite environment variables:', error);
        processEnv = {};
    }
} else {
    // We're in a Node.js environment
    processEnv = process.env;

    // For debugging in development
    if (process.env.NODE_ENV === 'development') {
        console.warn(
            'Environment variables in Node:',
            Object.keys(process.env)
                .filter((key) => key.startsWith('VITE_'))
                .reduce(
                    (acc, key) => {
                        acc[key] = process.env[key] ? '[SET]' : '[NOT SET]';
                        return acc;
                    },
                    {} as Record<string, string>,
                ),
        );
    }
}

// Validate environment variables with better error handling
let env: Env;
try {
    env = validateEnv(processEnv);
} catch (error) {
    console.error('❌ Environment validation failed:', error);

    // In development, provide more helpful error information
    if (
        processEnv.NODE_ENV === 'development' ||
        processEnv.MODE === 'development'
    ) {
        console.error('Current environment context:', {
            isNode,
            isVercel,
            nodeEnv: processEnv.NODE_ENV,
            viteMode: processEnv.MODE,
            hasViteApiUrl: Boolean(processEnv.VITE_API_URL),
        });
    }

    // Fallback to default values in production to prevent crashes
    if (processEnv.NODE_ENV === 'production') {
        console.warn('Using fallback environment in production');
        env = {
            NODE_ENV: 'production',
            VITE_API_URL: processEnv.VITE_API_URL || 'https://api.vernisai.com',
            VITE_ENABLE_ANALYTICS: false,
            VITE_ENABLE_FEATURE_X: false,
            VITE_GOOGLE_ANALYTICS_ID: undefined,
            VITE_MICROSOFT_CLARITY_ID: undefined,
        };
    } else {
        throw error;
    }
}

export { env };

// Extract client-side environment variables
export const clientEnv: ClientEnv = extractClientEnv(env);

/**
 * Use this function to safely access environment variables
 * It will throw an error if the variable is not defined and no default is provided
 *
 * @param key The environment variable key
 * @param defaultValue Optional default value if the variable is not defined
 * @returns The environment variable value
 */
export function getEnv<K extends keyof Env>(
    key: K,
    defaultValue?: Env[K],
): Env[K] {
    const value = env[key];

    if (value === undefined) {
        if (defaultValue !== undefined) {
            return defaultValue;
        }
        throw new Error(`Environment variable ${String(key)} is not defined`);
    }

    return value;
}

/**
 * Use this function to safely access client-side environment variables
 * It will throw an error if the variable is not defined and no default is provided
 *
 * @param key The client environment variable key
 * @param defaultValue Optional default value if the variable is not defined
 * @returns The client environment variable value
 */
export function getClientEnv<K extends keyof ClientEnv>(
    key: K,
    defaultValue?: ClientEnv[K],
): ClientEnv[K] {
    const value = clientEnv[key];

    if (value === undefined) {
        if (defaultValue !== undefined) {
            return defaultValue;
        }
        throw new Error(
            `Client environment variable ${String(key)} is not defined`,
        );
    }

    return value;
}
