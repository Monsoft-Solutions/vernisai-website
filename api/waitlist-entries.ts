import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
    PostgresProvider,
    PgConfig,
    WaitlistService,
} from '@vernisai/database';

// Get PostgreSQL configuration from environment variables
const getPgConfig = (): PgConfig => {
    // Check if required environment variables are set
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL environment variable is required');
    }

    return {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production',
    };
};

// Initialize database connection
const initializeDatabase = () => {
    try {
        const config = getPgConfig();
        PostgresProvider.initialize(config);
    } catch (error) {
        console.error('Failed to initialize database:', error);
        throw new Error('Database initialization failed');
    }
};

// Basic authentication middleware
const authenticate = (request: VercelRequest): boolean => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return false;
    }

    // Get credentials from header
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString(
        'utf-8',
    );
    const [username, password] = credentials.split(':');

    // In production, you should use environment variables for these values
    // and ensure they are properly secured
    const API_USERNAME = process.env.API_USERNAME || 'admin';
    const API_PASSWORD = process.env.API_PASSWORD || 'password';

    return username === API_USERNAME && password === API_PASSWORD;
};

// Using named export with ES modules
export const config = {
    runtime: 'nodejs18.x',
};

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    // Only allow GET method
    if (request.method !== 'GET') {
        return response.status(405).json({
            success: false,
            error: 'Method not allowed',
        });
    }

    // Check authentication
    if (!authenticate(request)) {
        response.setHeader('WWW-Authenticate', 'Basic');
        return response.status(401).json({
            success: false,
            error: 'Authentication required',
        });
    }

    try {
        // Initialize database connection
        initializeDatabase();

        // Create waitlist service
        const waitlistService = new WaitlistService();

        // Get all entries with strong typing
        const entriesResult = await waitlistService.getAllEntries();

        return response.status(200).json({
            success: true,
            count: entriesResult.count,
            data: entriesResult.entries,
        });
    } catch (error) {
        console.error('Error fetching waitlist entries:', error);
        return response.status(500).json({
            success: false,
            error: 'Failed to fetch waitlist entries',
        });
    } finally {
        // Close database connection (important for serverless functions)
        await PostgresProvider.close();
    }
}
