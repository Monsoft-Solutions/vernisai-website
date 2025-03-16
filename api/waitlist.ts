import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
    PostgresProvider,
    PgConfig,
    WaitlistService,
    AudienceTrackingService,
    insertWaitlistSchema,
    extractTrackingInfo,
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

        // Extract tracking information from the request
        try {
            // Get UTM parameters and referrer from request body if provided
            const {
                utm_source,
                utm_medium,
                utm_campaign,
                utm_term,
                utm_content,
                referrer,
            } = request.body as Record<string, string>;

            const utmParams = {
                utm_source,
                utm_medium,
                utm_campaign,
                utm_term,
                utm_content,
            };

            // Only include UTM params that are defined
            const filteredUtmParams = Object.fromEntries(
                Object.entries(utmParams).filter(([_, v]) => v !== undefined),
            );

            console.log('filteredUtmParams', filteredUtmParams);
            // Extract tracking info from request
            const trackingData = await extractTrackingInfo(
                request,
                data.id,
                referrer,
                Object.keys(filteredUtmParams).length > 0
                    ? filteredUtmParams
                    : undefined,
            );

            console.log('trackingData', trackingData);

            // Save tracking data
            const audienceTrackingService = new AudienceTrackingService();
            await audienceTrackingService.saveTrackingData(trackingData);
        } catch (trackingError) {
            // Log tracking error but don't fail the request
            console.error('Failed to save tracking data:', trackingError);
            // We intentionally don't return an error to the client here
            // as the waitlist submission was successful
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
