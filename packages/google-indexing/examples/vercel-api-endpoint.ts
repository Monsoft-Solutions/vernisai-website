import { createVercelDeploymentHandler } from '../src';

// Example Vercel API endpoint for handling deployment webhooks
// and triggering Google indexing updates

// Get environment variables
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY;

// Validate environment variables
if (!clientEmail || !privateKey) {
    throw new Error(
        'Missing required environment variables: GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY must be set',
    );
}

// Create the handler with configuration using environment variables
const handler = createVercelDeploymentHandler({
    clientEmail,
    privateKey,
    baseUrl: 'https://vernis.ai',
    // Note: For production, you'd likely want to download the sitemap
    // or use a different approach rather than expecting the file to be local
});

export default handler;
