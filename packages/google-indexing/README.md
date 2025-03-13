# Google Indexing API Integration

This package provides utilities for automatically notifying Google about updated pages on your website. It uses the Google Indexing API to request reindexing of pages after deployments.

## Features

- Automatically notify Google about updated pages after Vercel deployments
- Support for extracting URLs from sitemaps
- CLI tool for manual indexing
- TypeScript support

## Prerequisites

Before using this package, you need to:

1. Create a Google Search Console account and verify ownership of your website
2. Create a Google Cloud project and enable the Indexing API
3. Create a service account with appropriate permissions
4. Download the service account credentials JSON file

## Installation

```bash
npm install @vernisai/google-indexing
# or
yarn add @vernisai/google-indexing
```

## Usage

### Vercel Integration

To automatically notify Google after Vercel deployments, create a serverless function that uses the provided handler:

```typescript
// api/google-indexing.ts
import { createVercelDeploymentHandler } from '@vernisai/google-indexing';

const handler = createVercelDeploymentHandler({
    credentialsPath: './google-credentials.json', // Path to credentials file
    baseUrl: 'https://vernis.ai', // Your website's base URL
    sitemapPath: './public/sitemap.xml', // Optional path to sitemap
});

export default handler;
```

Then, set up a Vercel deployment webhook that points to this endpoint.

### CLI Usage

You can use the CLI tool to manually trigger Google indexing updates:

```bash
# Install globally
npm install -g @vernisai/google-indexing

# Run the CLI tool
google-indexing --credentials=./google-credentials.json --base-url=https://vernis.ai --sitemap=./public/sitemap.xml

# Or specify a single URL
google-indexing --credentials=./google-credentials.json --base-url=https://vernis.ai --url=https://vernis.ai/specific-page
```

### Programmatic Usage

```typescript
import { GoogleIndexingClient } from '@vernisai/google-indexing';

async function updateIndexing() {
    const client = new GoogleIndexingClient({
        credentialsPath: './google-credentials.json',
        baseUrl: 'https://vernis.ai',
    });

    await client.initialize();

    const results = await client.notifyUrlUpdates([
        { url: 'https://vernis.ai/page1', type: 'URL_UPDATED' },
        { url: 'https://vernis.ai/page2', type: 'URL_UPDATED' },
    ]);

    console.warn(results);
}
```

## Security Notes

- Keep your Google service account credentials secure
- Set appropriate permissions on the credentials file
- Do not commit credentials to source control

## License

This package is private and for internal use only.
