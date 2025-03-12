#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const envExamplePath = path.join(rootDir, '.env.example');
const envPath = path.join(rootDir, '.env');

// Check if .env file already exists
if (fs.existsSync(envPath)) {
    console.log('ℹ️ .env file already exists. Skipping creation.');
    process.exit(0);
}

// Check if .env.example exists
if (!fs.existsSync(envExamplePath)) {
    console.error('❌ .env.example file not found. Cannot create .env file.');
    process.exit(1);
}

// Copy .env.example to .env
try {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file from .env.example');
    console.log('⚠️ Please update the .env file with your actual values.');
} catch (error) {
    console.error('❌ Failed to create .env file:', error.message);
    process.exit(1);
}
