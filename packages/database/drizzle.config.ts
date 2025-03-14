import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get the database URL from environment variables
let connectionString = process.env.DATABASE_URL || '';

// Remove quotes if present
if (connectionString.startsWith('"') && connectionString.endsWith('"')) {
    connectionString = connectionString.slice(1, -1);
}

console.log(
    'Using DATABASE_URL:',
    connectionString
        ? 'Connection string found'
        : 'Connection string not found',
);

// Extract connection details manually to avoid URL parsing issues with special characters
const regex = /postgresql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
const match = connectionString.match(regex);

if (!match) {
    console.error('Invalid connection string format');
    process.exit(1);
}

const [, user, password, host, port, database] = match;

// Export the configuration
export default defineConfig({
    schema: './src/schema/waitlist.schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        host,
        port: parseInt(port, 10),
        user,
        password,
        database,
        ssl: {
            rejectUnauthorized: false,
        },
    },
    verbose: true,
    strict: true,
});
