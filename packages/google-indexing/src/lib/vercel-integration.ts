import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleIndexingClient } from './google-indexing-client';
import { extractUrlsFromSitemap } from './sitemap-parser';
import { GoogleIndexingConfig, IndexableUrl } from './types';

type VercelDeploymentPayload = {
    deployment: {
        url: string;
        meta?: {
            [key: string]: string;
        };
    };
    name: string;
    url: string;
    target?: string;
};

/**
 * Creates an API handler for Vercel deployment webhooks
 */
export function createVercelDeploymentHandler(config: GoogleIndexingConfig) {
    return async (req: VercelRequest, res: VercelResponse) => {
        // Validate request method
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed' });
        }

        try {
            const payload = req.body as VercelDeploymentPayload;

            // Only process production deployments
            if (payload.target !== 'production') {
                return res.status(200).json({
                    message: 'Skipping non-production deployment',
                });
            }

            const client = new GoogleIndexingClient(config);
            await client.initialize();

            let urls: string[] = [];

            // If sitemap path is provided, extract URLs from sitemap
            if (config.sitemapPath) {
                urls = extractUrlsFromSitemap(config.sitemapPath);
            }
            // Otherwise, just use the base URL
            else {
                urls = [config.baseUrl];
            }

            // Create indexable URLs
            const indexableUrls: IndexableUrl[] = urls.map((url) => ({
                url,
                type: 'URL_UPDATED',
            }));

            // Notify Google about URL updates
            const results = await client.notifyUrlUpdates(indexableUrls);

            // Calculate success and failure counts
            const successCount = results.filter((r) => r.success).length;
            const failureCount = results.length - successCount;

            return res.status(200).json({
                message: `Successfully processed Vercel deployment`,
                total: results.length,
                success: successCount,
                failed: failureCount,
                results,
            });
        } catch (error) {
            console.error('Error processing Vercel deployment:', error);

            return res.status(500).json({
                error: 'Failed to process deployment',
                message: error instanceof Error ? error.message : String(error),
            });
        }
    };
}
