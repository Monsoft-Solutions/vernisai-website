#!/usr/bin/env node

/**
 * This script is used by Vercel to build the project.
 * It ensures that environment variables are properly set before building.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..', '..', '..');
const websiteDir = path.resolve(__dirname, '..');

// Check if we're running in Vercel
const isVercel = process.env.VERCEL === '1';

console.warn(
    `Building project in ${isVercel ? 'Vercel' : 'local'} environment`,
);

// Log environment variables for debugging (only keys, not values for security)
console.warn(
    'Available environment variables:',
    Object.keys(process.env)
        .filter((key) => key.startsWith('VITE_'))
        .join(', '),
);

// Ensure VITE_API_URL is set
if (!process.env.VITE_API_URL) {
    console.warn('VITE_API_URL is not set. Using default value.');
    process.env.VITE_API_URL = 'https://api.vernis.ai';
}

// Create a .env file for Vercel if it doesn't exist
if (isVercel) {
    const envPath = path.join(websiteDir, '.env');

    // Create .env file with Vercel environment variables
    const envContent = Object.keys(process.env)
        .filter((key) => key.startsWith('VITE_'))
        .map((key) => `${key}=${process.env[key]}`)
        .join('\n');

    fs.writeFileSync(envPath, envContent);
    console.warn('Created .env file for Vercel build');
}

// Run the build command
try {
    console.warn('Building project...');
    execSync('npm run build', {
        cwd: rootDir,
        stdio: 'inherit',
        env: process.env,
    });
    console.warn('Build completed successfully');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}
