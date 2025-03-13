#!/usr/bin/env node
import { resolve } from 'path';
import { GoogleIndexingClient } from './google-indexing-client';
import { extractUrlsFromSitemap } from './sitemap-parser';
import { GoogleIndexingConfig, IndexableUrl } from './types';

/**
 * CLI tool for manually triggering Google indexing updates
 */
export async function main() {
    const args = process.argv.slice(2);

    // Parse command line arguments
    const credentialsPath = args
        .find((a) => a.startsWith('--credentials='))
        ?.split('=')[1];
    const baseUrl = args
        .find((a) => a.startsWith('--base-url='))
        ?.split('=')[1];
    const sitemapPath = args
        .find((a) => a.startsWith('--sitemap='))
        ?.split('=')[1];
    const specificUrl = args.find((a) => a.startsWith('--url='))?.split('=')[1];

    // Check required arguments
    if (!credentialsPath || !baseUrl) {
        console.error('Error: Required arguments missing');
        console.error(
            'Usage: google-indexing-cli --credentials=path/to/credentials.json --base-url=https://example.com [--sitemap=path/to/sitemap.xml] [--url=https://example.com/specific-page]',
        );
        process.exit(1);
    }

    // Create client config
    const config: GoogleIndexingConfig = {
        clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
        privateKey: process.env.GOOGLE_PRIVATE_KEY,
        baseUrl,
        sitemapPath: sitemapPath
            ? resolve(process.cwd(), sitemapPath)
            : undefined,
    };

    try {
        // Initialize client
        const client = new GoogleIndexingClient(config);
        await client.initialize();

        let urls: string[] = [];

        // Determine which URLs to index
        if (specificUrl) {
            // Index a specific URL
            urls = [specificUrl];
        } else if (sitemapPath) {
            // Index all URLs from sitemap
            urls = extractUrlsFromSitemap(config.sitemapPath!);
            console.warn(`Found ${urls.length} URLs in sitemap`);
        } else {
            // Just index the base URL
            urls = [baseUrl];
        }

        // Create indexable URLs
        const indexableUrls: IndexableUrl[] = urls.map((url) => ({
            url,
            type: 'URL_UPDATED',
        }));

        // Notify Google about URL updates
        console.warn(
            `Submitting ${indexableUrls.length} URLs to Google Indexing API...`,
        );
        const results = await client.notifyUrlUpdates(indexableUrls);

        // Print results
        const successCount = results.filter((r) => r.success).length;
        const failureCount = results.length - successCount;

        console.warn('Google Indexing API Results:');
        console.warn(`- Total URLs: ${results.length}`);
        console.warn(`- Successful: ${successCount}`);
        console.warn(`- Failed: ${failureCount}`);

        if (failureCount > 0) {
            console.warn('\nFailed URLs:');
            results
                .filter((r) => !r.success)
                .forEach((r) => {
                    console.warn(`- ${r.url}: ${r.error}`);
                });
        }

        return {
            success: failureCount === 0,
            total: results.length,
            successCount,
            failureCount,
        };
    } catch (error) {
        console.error(
            'Error:',
            error instanceof Error ? error.message : String(error),
        );
        throw error;
    }
}

/**
 * Run the CLI tool
 */
export function runCli() {
    main().catch((error) => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
}

// Run CLI if executed directly
if (require.main === module) {
    runCli();
}
