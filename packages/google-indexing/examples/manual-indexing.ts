import { GoogleIndexingClient } from '../src';

// Example script to manually trigger indexing for specific URLs

async function manualIndexing() {
    // Initialize the client using environment variables
    // Make sure to set these environment variables:
    // GOOGLE_CLIENT_EMAIL - The service account email
    // GOOGLE_PRIVATE_KEY - The service account private key

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!clientEmail || !privateKey) {
        throw new Error(
            'Missing required environment variables: GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY must be set',
        );
    }

    const client = new GoogleIndexingClient({
        clientEmail,
        privateKey,
        baseUrl: 'https://vernis.ai',
    });

    await client.initialize();

    // Example URLs to index
    const urls = [
        'https://vernis.ai/',
        'https://vernis.ai/features',
        'https://vernis.ai/pricing',
        'https://vernis.ai/use-cases',
    ];

    console.warn(`Submitting ${urls.length} URLs to Google for indexing...`);

    // Submit indexing requests
    const results = await client.notifyUrlUpdates(
        urls.map((url) => ({
            url,
            type: 'URL_UPDATED',
        })),
    );

    // Log results
    const successCount = results.filter((r) => r.success).length;

    console.warn(`Successfully indexed ${successCount} of ${urls.length} URLs`);

    // Log any errors
    const failedResults = results.filter((r) => !r.success);
    if (failedResults.length > 0) {
        console.error('Failed indexing requests:');
        failedResults.forEach((result) => {
            console.error(`- ${result.url}: ${result.error}`);
        });
    }
}

// Run the function if this file is executed directly
if (require.main === module) {
    manualIndexing().catch((error) => {
        console.error('Error:', error);
        process.exit(1);
    });
}
