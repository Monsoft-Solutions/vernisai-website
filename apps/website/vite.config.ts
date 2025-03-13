import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import htmlConfig from 'vite-plugin-html-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [
            react(),
            tailwindcss(),
            // Configure HTML generation
            htmlConfig({
                metas: [
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1.0',
                    },
                    {
                        name: 'description',
                        content:
                            'VernisAI - AI-Powered No-Code Workflow Automation',
                    },
                ],
            }),
            // Copy static assets
            viteStaticCopy({
                targets: [
                    {
                        src: 'public/_redirects',
                        dest: '',
                    },
                    {
                        src: 'src/routes.ts',
                        dest: 'assets',
                        rename: 'routes.js',
                        transform: (contents) => {
                            // Simple transformation to make the file compatible with ESM in the browser
                            return contents
                                .toString()
                                .replace(
                                    /import\s+{[^}]+}\s+from\s+['"]\.\/types\/routes['"];?/g,
                                    '',
                                )
                                .replace(/export\s+type\s+[^{]+{[^}]+}/g, '')
                                .replace(/:\s*RouteConfig\[\]/g, '')
                                .replace(/:\s*string\[\]/g, '');
                        },
                    },
                ],
            }),
        ],
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
        build: {
            // Generate source maps for production build
            sourcemap: mode === 'development',
            // Optimize output
            minify: mode !== 'development',
            // Configure rollup options
            rollupOptions: {
                output: {
                    // Chunk files by type
                    manualChunks: {
                        vendor: ['react', 'react-dom', 'react-router-dom'],
                        ui: ['@vernisai/ui'],
                        utils: ['@vernisai/utils'],
                    },
                },
            },
            // Optimize dependencies
            commonjsOptions: {
                include: [/node_modules/],
            },
            // Reduce chunk size warnings threshold
            chunkSizeWarningLimit: 1000,
        },
        optimizeDeps: {
            // Include dependencies that need optimization
            include: ['react', 'react-dom', 'react-router-dom'],
        },
    };
});
