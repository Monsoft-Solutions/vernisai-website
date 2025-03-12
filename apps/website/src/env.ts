/**
 * Environment variables for the website app
 *
 * This file re-exports the environment utilities from @vernisai/utils
 * and provides a convenient way to access environment variables
 * throughout the application.
 */

import { env, clientEnv } from '@vernisai/utils';

export { env, clientEnv };

/**
 * Get a client environment variable with a fallback value
 * @param key The environment variable key
 * @param fallback The fallback value if the environment variable is not set
 * @returns The environment variable value or the fallback
 */
export function getClientEnv<T>(key: string, fallback: T): T {
    const value = clientEnv[key as keyof typeof clientEnv];
    return value !== undefined ? (value as unknown as T) : fallback;
}

/**
 * Get a server environment variable with a fallback value
 * @param key The environment variable key
 * @param fallback The fallback value if the environment variable is not set
 * @returns The environment variable value or the fallback
 */
export function getEnv<T>(key: string, fallback: T): T {
    const value = env[key as keyof typeof env];
    return value !== undefined ? (value as unknown as T) : fallback;
}

// Example of how to use environment variables:
//
// import { getClientEnv } from '@/env';
//
// const apiUrl = getClientEnv('VITE_API_URL', 'http://localhost:3000/api');
// const analyticsEnabled = getClientEnv('VITE_ENABLE_ANALYTICS', false);
//
// if (analyticsEnabled) {
//   // Initialize analytics
// }
