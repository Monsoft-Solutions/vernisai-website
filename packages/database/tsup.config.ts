import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: {
        resolve: true,
    },
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    env: {
        NODE_ENV: process.env.NODE_ENV || 'production',
    },
    target: 'node16',
    external: ['@supabase/supabase-js'],
});
