# Google Indexing API Integration

This document explains how to use the Google Indexing API integration in the VernisAI website.

## Overview

The VernisAI website includes integration with Google's Indexing API, which allows the site to notify Google about new or updated pages that should be indexed. This helps ensure that Google's search index stays up-to-date with the latest content on the site.

The integration consists of:

1. A Vercel serverless function that responds to deployment webhooks
2. A manual script for triggering indexing updates
3. Configuration options for controlling the indexing behavior

## Setup

### Prerequisites

Before using the Google Indexing API integration, you need to:

1. Create a Google Search Console account and verify ownership of the website
2. Create a Google Cloud project and enable the Indexing API
3. Create a service account with appropriate permissions
4. Keep the service account client email and private key for configuration

For detailed instructions, see the [Setup Guide](/packages/google-indexing/docs/setup-guide.md).

### Configuration

To configure the Google Indexing API integration:

1. Add your Google service account credentials to the Vercel environment variables:

    ```
    GOOGLE_CLIENT_EMAIL=service-account@your-project.iam.gserviceaccount.com
    GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
    ```

2. Set the `SITE_URL` environment variable to your website's base URL:

    ```
    SITE_URL=https://vernis.ai
    ```

3. Create a [Vercel deployment webhook](https://vercel.com/docs/deployments/deploy-hooks) that points to your API endpoint:

    ```
    https://vernis.ai/api/google-indexing
    ```

## Usage

### Automatic Indexing on Deployment

Once set up, the integration will automatically notify Google about updated pages whenever a new deployment is made to your Vercel project. This happens via a webhook that Vercel sends to your API endpoint.

### Manual Indexing

You can also manually trigger indexing updates with the included script:

```bash
npm run update-google-index
```

This is useful when you want to force Google to re-index your site outside of the normal deployment process.

### Combined Build and Index

You can build the site and update the Google index in one command:

```bash
npm run build:with-index
```

This will:

1. Build the site (with typechecking)
2. Generate the sitemap
3. Pre-render all pages
4. Notify Google about all the URLs in the sitemap

## Troubleshooting

If you encounter issues with the Google Indexing API integration:

1. **Permission errors**: Make sure the service account has been added to Search Console with correct permissions
2. **API not enabled**: Verify the Indexing API is enabled in your Google Cloud project
3. **Credentials format**: Ensure the private key includes proper newlines (use \n in environment variables)
4. **URL errors**: Check that the URLs you're submitting match exactly what's in Search Console
5. **Rate limits**: The Indexing API has limits on the number of URLs you can submit (typically 200 URLs per day)

## Logs

You can view logs for the indexing API in the Vercel dashboard under "Functions" > "google-indexing.js". This will show you:

- When indexing requests were made
- How many URLs were submitted
- Any errors that occurred

## Resources

- [Google Indexing API Documentation](https://developers.google.com/search/apis/indexing-api/v3/quickstart)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Google Search Console](https://search.google.com/search-console)
