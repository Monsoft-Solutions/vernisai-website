import {
    validateEnv,
    extractClientEnv,
    type Env,
    type ClientEnv,
} from './index';

/// <reference types="vite/client" />

/**
 * Load and validate environment variables
 * This should be imported and used instead of directly accessing process.env
 */

// Determine if we're in a Node.js environment (server) or browser
const isServer = typeof process !== 'undefined' && process.env;
const isVercel = isServer && process.env?.VERCEL === '1';

// Get environment variables from the appropriate source
let rawEnv: Record<string, string | undefined> = {};

// In Node.js environment
if (isServer) {
    // Process.env is already the correct type (Record<string, string | undefined>)
    rawEnv = process.env;
}
// In browser environment
else {
    try {
        // Try to access Vite's environment variables
        // This is wrapped in try/catch to handle different environments
        if (typeof window !== 'undefined') {
            // For Vite in production (injected at build time)
            const windowWithViteEnv = window as Window & {
                __VITE_INJECT_ENV__?: Record<string, string | undefined>;
                __vite_plugin_react_preamble_installed__?: boolean;
            };

            if (windowWithViteEnv.__VITE_INJECT_ENV__) {
                rawEnv = windowWithViteEnv.__VITE_INJECT_ENV__;
            }
            // For Vite in development
            else if (
                windowWithViteEnv.__vite_plugin_react_preamble_installed__
            ) {
                // Safe way to access import.meta.env without TypeScript errors
                try {
                    const viteEnv = Function('return import.meta.env')();
                    if (viteEnv) {
                        // Convert any boolean values to strings to match expected type
                        const stringifiedEnv: Record<
                            string,
                            string | undefined
                        > = {};
                        Object.entries(viteEnv).forEach(([key, value]) => {
                            if (typeof value === 'boolean') {
                                stringifiedEnv[key] = value.toString();
                            } else if (value === null) {
                                stringifiedEnv[key] = undefined;
                            } else {
                                stringifiedEnv[key] = value as
                                    | string
                                    | undefined;
                            }
                        });
                        rawEnv = stringifiedEnv;
                    }
                } catch (e) {
                    console.warn('Failed to access import.meta.env:', e);
                }
            }
        }
    } catch (error) {
        console.warn('Failed to access browser environment variables:', error);
    }
}

// Determine development mode
const isDev = isServer
    ? process.env.NODE_ENV === 'development'
    : rawEnv.DEV === 'true' || rawEnv.MODE === 'development';

// Log environment variables in development for debugging
if (isDev) {
    const envKeys = Object.keys(rawEnv).filter((key) =>
        key.startsWith('VITE_'),
    );
    console.warn(
        `Environment variables in ${isServer ? 'Node' : 'browser'}:`,
        envKeys.reduce(
            (acc, key) => {
                // Convert any value to string representation for logging
                acc[key] = rawEnv[key] !== undefined ? '[SET]' : '[NOT SET]';
                return acc;
            },
            {} as Record<string, string>,
        ),
    );
}

// Validate environment variables with better error handling
let validatedEnv: Env;
try {
    validatedEnv = validateEnv(rawEnv);
} catch (error) {
    console.error('❌ Environment validation failed:', error);

    // In development, provide more helpful error information
    if (isDev) {
        console.error('Current environment context:', {
            isServer,
            isVercel,
            nodeEnv: rawEnv.NODE_ENV,
            viteMode: rawEnv.MODE,
            hasViteApiUrl: Boolean(rawEnv.VITE_API_URL),
        });
    }

    // Rethrow the error
    throw error;
}

// Export the validated environment
export const env = validatedEnv;

// Extract client-side environment variables
export const clientEnv: ClientEnv = extractClientEnv(validatedEnv);
