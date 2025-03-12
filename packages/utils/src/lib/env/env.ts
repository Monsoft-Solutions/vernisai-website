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
const isVercel =
    isServer &&
    (process.env?.VERCEL === '1' || process.env?.VERCEL_ENV !== undefined);
const isVercelPreview = isVercel && process.env?.VERCEL_ENV === 'preview';

// Pre-determine development mode before loading envs
const isNodeDev = isServer
    ? process.env.NODE_ENV === 'development' || isVercelPreview
    : false;

// Get environment variables from the appropriate source
let rawEnv: Record<string, string | undefined> = {};

// In Node.js environment
if (isServer) {
    // Process.env is already the correct type (Record<string, string | undefined>)
    rawEnv = process.env;
    if (isNodeDev) console.warn('Running in Node.js environment');
}
// In browser environment
else {
    try {
        // Access Vite's injected environment variables
        // We need to use the global window object for TypeScript compatibility in non-Vite environments
        const viteEnv =
            typeof import.meta !== 'undefined' && 'env' in import.meta
                ? import.meta.env
                : ({} as ImportMeta);

        if (viteEnv) {
            // Convert any boolean values to strings to match expected type
            console.warn('viteEnv', viteEnv);
            rawEnv = viteEnv.env;
        }
    } catch (e) {
        console.warn('Failed to access import.meta.env:', e);
    }
}

// Determine full development mode now that we have rawEnv
const isDev = rawEnv.NODE_ENV === 'development';

// Log environment information in development
if (isDev && !isServer) {
    console.warn('Running in browser environment');

    if (Object.keys(rawEnv).filter((k) => k.startsWith('VITE_')).length === 0) {
        console.warn('No VITE_ environment variables found in browser context');
    }
}

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
    // Use a more lenient validation approach for Vercel preview deployments
    validatedEnv = validateEnv(rawEnv, isVercelPreview);
} catch (error) {
    console.error('❌ Environment validation failed:', error);

    // In development or preview, provide more helpful error information
    if (isDev || isVercelPreview) {
        console.error('Current environment context:', {
            isServer,
            isVercel,
            isVercelPreview,
            nodeEnv: rawEnv.NODE_ENV,
            viteMode: rawEnv.MODE,
            vercelEnv: rawEnv.VERCEL_ENV,
            hasViteApiUrl: Boolean(rawEnv.VITE_API_URL),
            availableEnvVars: Object.keys(rawEnv).filter((key) =>
                key.startsWith('VITE_'),
            ),
        });
    }

    // Provide fallback for preview environments
    if (isVercelPreview) {
        console.warn('Using fallback environment for Vercel preview');
        const fallbackEnv = {
            NODE_ENV: 'production',
            VITE_API_URL: 'https://api.vernisai.com',
            VITE_ENABLE_ANALYTICS: 'false',
            VITE_ENABLE_FEATURE_X: 'false',
        };
        validatedEnv = validateEnv(fallbackEnv, true);
    } else {
        // Rethrow the error in non-preview environments
        throw error;
    }
}

// Export the validated environment
export const env = validatedEnv;

// Extract client-side environment variables
export const clientEnv: ClientEnv = extractClientEnv(validatedEnv);
