# Setting Up Google Indexing API Access

This guide provides step-by-step instructions for setting up access to the Google Indexing API, which is required for the `@monsoft/google-indexing` package to function correctly.

## Prerequisites

1. A Google account with admin access
2. Ownership of your website verified in Google Search Console
3. A Google Cloud Platform account

## Step 1: Verify Ownership in Google Search Console

Before you can use the Indexing API, you must verify ownership of your website in Google Search Console:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property" and enter your website URL (e.g., https://vernis.ai)
3. Choose one of the verification methods:
    - HTML file upload
    - HTML meta tag
    - DNS record
    - Google Analytics
    - Google Tag Manager
4. Complete the verification process
5. Wait for Google to confirm your ownership

## Step 2: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use an existing one)
3. Note your Project ID, you'll need it later

## Step 3: Enable the Indexing API

1. In your Google Cloud project, go to "APIs & Services" > "Library"
2. Search for "Indexing API"
3. Click on "Google Indexing API"
4. Click "Enable"

## Step 4: Create a Service Account

1. In your Google Cloud project, go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Enter a name (e.g., "google-indexing")
4. Add a description (e.g., "Service account for Google Indexing API")
5. Click "Create and Continue"
6. Skip the "Grant this service account access to project" step for now
7. Click "Done"

## Step 5: Create and Download Credentials

1. Find your new service account in the list
2. Click on the three dots menu (⋮) on the right
3. Select "Manage keys"
4. Click "Add Key" > "Create new key"
5. Select "JSON" format
6. Click "Create"
7. The credentials file will be downloaded to your computer
8. Save this file securely - it contains private credentials

## Step 6: Add the Service Account to Search Console

1. Open the downloaded JSON credentials file
2. Copy the "client_email" value (it should look like `google-indexing@your-project-id.iam.gserviceaccount.com`)
3. Go back to [Google Search Console](https://search.google.com/search-console)
4. Select your property
5. Click on "Settings" (gear icon) in the left sidebar
6. Click on "Users and permissions"
7. Click "Add User"
8. Paste the service account email address you copied
9. Set the permission level to "Owner" or at least "Full"
10. Click "Add"

## Step 7: Configure Your Application

1. Store the downloaded JSON credentials file securely in your project
2. Make sure it's not committed to public repositories
3. In Vercel, add the credentials file as an environment variable or secure build-time file
4. Use the `@monsoft/google-indexing` package with the path to these credentials

Example configuration:

```typescript
import { createVercelDeploymentHandler } from '@monsoft/google-indexing';

const handler = createVercelDeploymentHandler({
    credentialsPath: './google-credentials.json', // Path to your credentials file
    baseUrl: 'https://vernis.ai',
    sitemapPath: './public/sitemap.xml', // Optional
});

export default handler;
```

## Securing Your Credentials

It's critical to keep your service account credentials secure:

1. **Never commit the JSON file to Git repositories**
2. Add it to your `.gitignore` file
3. For Vercel deployment, consider using:
    - Environment variables to store the path to the credentials
    - Vercel's encrypted environment files feature
    - Secure storage solutions like AWS Parameter Store or Google Secret Manager

## Testing Your Setup

After configuring everything, you can test your setup using the CLI tool:

```bash
npx google-indexing --credentials=./path/to/credentials.json --base-url=https://vernis.ai --url=https://vernis.ai/specific-page
```

If successful, you should see a confirmation message indicating that the URL was submitted for indexing.

## Troubleshooting

If you encounter issues:

1. **Permission errors**: Make sure the service account has been added to Search Console with correct permissions
2. **API not enabled**: Verify the Indexing API is enabled in your Google Cloud project
3. **Credentials format**: Ensure the credentials JSON file is complete and correctly formatted
4. **URL errors**: Check that the URLs you're submitting match exactly what's in Search Console
5. **Rate limits**: The Indexing API has limits on the number of URLs you can submit (typically 200 URLs per day)

For more information, refer to the [Google Indexing API documentation](https://developers.google.com/search/apis/indexing-api/v3/quickstart).
