import { defineConfig } from 'drizzle-kit';

// Get the database URL from environment variables
let connectionString = process.env.DATABASE_URL || '';

// Remove quotes if present
if (connectionString.startsWith('"') && connectionString.endsWith('"')) {
    connectionString = connectionString.slice(1, -1);
}

// Export the configuration
export default defineConfig({
    schema: './src/schema/waitlist.schema.ts',
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
