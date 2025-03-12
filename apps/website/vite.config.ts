import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '');

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
