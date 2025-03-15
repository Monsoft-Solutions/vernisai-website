import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createVercelDeploymentHandler } from '@monsoft/google-indexing';
import crypto from 'crypto';

/**
 * This is a Vercel API route that handles indexing site updates with Google
 * after each deployment. It should be configured as a deployment webhook
 * in your Vercel project settings.
 */

// Helper to get the site's sitemap URL
const getSiteUrl = () => {
    // Get the site URL from environment variables or use a default
    return process.env.SITE_URL || 'https://vernis.ai';
};

// Helper to get client email from environment variable
const getClientEmail = () => {
    if (!process.env.GOOGLE_CLIENT_EMAIL) {
        throw new Error('GOOGLE_CLIENT_EMAIL environment variable is not set');
    }
    return process.env.GOOGLE_CLIENT_EMAIL;
};

// Helper to get private key from environment variable
const getPrivateKey = () => {
    if (!process.env.GOOGLE_PRIVATE_KEY) {
        throw new Error('GOOGLE_PRIVATE_KEY environment variable is not set');
    }
    // Handle newlines in the private key (environment variables can strip newlines)
    return process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
};

// Create the handler with configuration
const handler = (req: VercelRequest, res: VercelResponse) => {
    try {
        // Only allow POST requests (from Vercel deployment webhook)
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed' });
        }

        // Log deployment webhook payload for debugging
        console.warn(
            'Received deployment webhook payload:',
            JSON.stringify(req.body),
        );

        // Verify the signature of the request
        if (!verifySignature(req)) {
            console.error('Unauthorized request');
            return res.status(401).json({ error: 'Unauthorized' });
        } else {
            console.warn('Request authorized');
        }

        // Create indexing handler with our config
        const indexingHandler = createVercelDeploymentHandler({
            clientEmail: getClientEmail(),
            privateKey: getPrivateKey(),
            baseUrl: getSiteUrl(),
            sitemapPath: '../../sitemap.xml',
        });

        // Execute the handler
        return indexingHandler(req, res);
    } catch (error) {
        console.error('Error in Google indexing handler:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : String(error),
        });
    }
};

async function verifySignature(req: VercelRequest) {
    const payload = await req.body;

    const secret = process.env.WEBHOOK_SECRET;
    if (!secret) {
        throw new Error('WEBHOOK_SECRET environment variable is not set');
    }

    const signature = crypto
        .createHmac('sha1', secret)
        .update(payload)
        .digest('hex');
    return signature === req.headers['x-vercel-signature'];
}

export default handler;
