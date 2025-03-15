import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
    PostgresProvider,
    PgConfig,
    WaitlistService,
    insertWaitlistSchema,
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

// Using named export with ES modules
export const config = {
    runtime: 'nodejs',
};

// Using default export with ES modules
export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    // Only allow POST method
    if (request.method !== 'POST') {
        return response.status(405).json({
            success: false,
            error: 'Method not allowed',
        });
    }

    try {
        // Initialize database connection
        initializeDatabase();

        // Validate request body with Zod schema
        const result = insertWaitlistSchema.safeParse(request.body);

        if (!result.success) {
            return response.status(400).json({
                success: false,
                error: 'Invalid form data',
                details: result.error.format(),
            });
        }

        if (!result.data.email) {
            return response.status(400).json({
                success: false,
                error: 'Email is required',
            });
        }

        if (!result.data.name) {
            return response.status(400).json({
                success: false,
                error: 'Name is required',
            });
        }
        // Create waitlist service
        const waitlistService = new WaitlistService();

        // Check if email already exists
        const emailExists = await waitlistService.emailExists(
            result.data.email,
        );
        if (emailExists) {
            return response.status(409).json({
                success: false,
                error: 'Email already registered',
            });
        }

        // Add to waitlist
        const { success, data, error } = await waitlistService.addToWaitlist({
            name: result.data.name,
            email: result.data.email,
            company: result.data.company,
        });

        if (!success) {
            return response.status(500).json({ success, error });
        }

        return response.status(201).json({
            success: true,
            message: 'Successfully added to waitlist',
            data,
        });
    } catch (error) {
        console.error('Waitlist API error:', error);
        return response.status(500).json({
            success: false,
            error: 'Server error, please try again later',
        });
    } finally {
        // Close database connection (important for serverless functions)
        await PostgresProvider.close();
    }
}
