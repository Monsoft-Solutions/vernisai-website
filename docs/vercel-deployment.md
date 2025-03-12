# Vercel Deployment Guide

This guide explains how to deploy the VernisAI website to Vercel, with a focus on environment variable configuration.

## Environment Variables

The VernisAI website requires certain environment variables to function correctly. When deploying to Vercel, you need to configure these variables in the Vercel dashboard.

### Required Environment Variables

The following environment variables are required for the application to work:

- `VITE_API_URL`: The URL for the backend API services

### Optional Environment Variables

These variables are optional but may be required for certain features:

- `VITE_ENABLE_ANALYTICS`: Set to `true` to enable analytics tracking
- `VITE_GOOGLE_ANALYTICS_ID`: Google Analytics ID (required if analytics is enabled)
- `VITE_MICROSOFT_CLARITY_ID`: Microsoft Clarity ID (optional even if analytics is enabled)
- `VITE_ENABLE_FEATURE_X`: Set to `true` to enable feature X

## Setting Up Environment Variables in Vercel

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click on the "Settings" tab
4. In the left sidebar, click on "Environment Variables"
5. Add each required environment variable:
    - Enter the name (e.g., `VITE_API_URL`)
    - Enter the value (e.g., `https://api.vernisai.com`)
    - Select the environments where this variable should be available (Production, Preview, Development)
    - Click "Add"
6. Repeat for all required and optional variables
7. After adding all variables, redeploy your application

## Troubleshooting

If you encounter environment variable issues during deployment:

### Missing Required Variables

If you see an error about missing required variables:

1. Check that all required variables are set in the Vercel dashboard
2. Ensure the variable names match exactly (they are case-sensitive)
3. Verify that the variables are available in the correct environments

### Environment Variable Not Available at Runtime

If environment variables are set but not available at runtime:

1. Make sure all client-side variables are prefixed with `VITE_`
2. Check that the Vercel build is using the correct configuration
3. Try clearing the Vercel cache and redeploying

### Custom Build Command

The project uses a custom build command for Vercel deployments. This is configured in the `vercel.json` file:

```json
{
    "buildCommand": "cd apps/website && npm run build:vercel"
}
```

This command ensures that environment variables are properly loaded during the build process.

## Monorepo Considerations

Since this project uses Turborepo, there are some special considerations:

1. Environment variables need to be accessible to all packages that require them
2. The build process needs to be configured to work with the monorepo structure
3. The `vercel.json` file specifies the output directory as `apps/website/dist`

## Local Testing

To test Vercel environment variables locally:

1. Create a `.env.local` file in the `apps/website` directory
2. Add your environment variables to this file
3. Run `npm run dev` to start the development server

This will simulate the environment variables that will be available in Vercel.

## Further Reading

- [Vercel Environment Variables Documentation](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Turborepo with Vercel](https://turbo.build/repo/docs/ci/vercel)
