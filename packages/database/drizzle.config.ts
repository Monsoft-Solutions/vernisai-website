import { defineConfig } from 'drizzle-kit';
import * as tables from './src/tables';

// Get the database URL from environment variables
let connectionString = process.env.DATABASE_URL || '';

// Remove quotes if present
if (connectionString.startsWith('"') && connectionString.endsWith('"')) {
    connectionString = connectionString.slice(1, -1);
}

// Export the configuration
export default defineConfig({
    schema: './src/tables',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: connectionString,
        ssl: {
            rejectUnauthorized: false,
            requestCert: false,
        },
    },
    verbose: true,
    strict: true,
});
