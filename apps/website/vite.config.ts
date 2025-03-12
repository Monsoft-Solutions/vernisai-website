import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // Load env files based on mode from multiple locations
    // First try to load from project root
    const rootEnv = loadEnv(mode, process.cwd(), '');

    // Then try to load from the app directory (these will override duplicates)
    // This ensures we load .env files in the apps/website directory
    const appEnv = loadEnv(mode, __dirname, '');

    // Merge both environments, with app env taking precedence
    const env = { ...rootEnv, ...appEnv };

    // Ensure critical environment variables have fallbacks for Vercel preview
    const isVercelPreview = env.VERCEL_ENV === 'preview';
    if (isVercelPreview && !env.VITE_API_URL) {
        console.warn('VITE_API_URL not set in Vercel preview, using fallback');
        env.VITE_API_URL = 'https://api.vernis.ai';
    }

    // Expose environment variables to the client
    const envWithProcessPrefix = Object.entries(env).reduce(
        (prev, [key, val]) => {
            return {
                ...prev,
                [`process.env.${key}`]: JSON.stringify(val),
            };
        },
        {},
    );

    // Log available environment variables in development mode
    if (mode === 'development') {
        console.warn(
            'Available environment variables:',
            Object.keys(env)
                .filter((key) => key.startsWith('VITE_'))
                .join(', '),
        );
    }

    return {
        plugins: [react(), tailwindcss()],
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                '@vernisai/ui': resolve(__dirname, '../../packages/ui/src'),
                '@vernisai/utils': resolve(
                    __dirname,
                    '../../packages/utils/src',
                ),
            },
        },
        server: {
            allowedHosts: [
                'wise-mastiff-sharing.ngrok-free.app',
                'localhost',
                '127.0.0.1',
            ],
        },
        define: {
            // Make process.env available to the client
            ...envWithProcessPrefix,
            // Expose Vite env variables to the client
            __VITE_ENV__: JSON.stringify(env),
        },
    };
});
