/**
 * Environment variables for the website app
 *
 * This file re-exports the environment utilities from @vernisai/utils
 * and provides a convenient way to access environment variables
 * throughout the application.
 */

import { env, clientEnv, getEnv, getClientEnv } from '@vernisai/utils';

export { env, clientEnv, getEnv, getClientEnv };

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
