# Environment Variables Guide

This document outlines how environment variables are used in the VernisAI website.

## Overview

The website uses a robust environment configuration system with Zod validation to ensure all necessary variables are properly defined. This approach provides type safety and validation while keeping the configuration flexible.

## Available Environment Variables

| Variable                    | Type           | Description                                                      | Default       |
| --------------------------- | -------------- | ---------------------------------------------------------------- | ------------- |
| `VITE_API_URL`              | `string (URL)` | API endpoint URL for backend services                            | _Required_    |
| `VITE_APP_ENV`              | `enum`         | Application environment (`development`, `staging`, `production`) | `development` |
| `VITE_DEBUG_MODE`           | `boolean`      | Enable/disable debug features (`true`, `false`)                  | `false`       |
| `VITE_GOOGLE_ANALYTICS_ID`  | `string`       | Google Analytics measurement ID                                  | _Optional_    |
| `VITE_MICROSOFT_CLARITY_ID` | `string`       | Microsoft Clarity project ID                                     | _Optional_    |

## Environment Files

The project uses the following environment files:

- `.env.example` - Template showing all available variables
- `.env.development` - Development environment settings
- `.env.production` - Production environment settings

You can create additional environment files like `.env.staging` as needed.

## Usage in Code

Environment variables are accessed through the `env.ts` module, which provides a validated configuration:

```typescript
import { getEnv, isProduction, isDevelopment } from '@/lib/env';

// Get all environment variables
const env = getEnv();
console.warn(env.VITE_API_URL);

// Environment helpers
if (isProduction()) {
    // Production-only code
}

if (isDevelopment()) {
    // Development-only code
}
```

## Adding New Environment Variables

To add a new environment variable:

1. Define it in the `envSchema` in `src/lib/env.ts`
2. Add it to the `.env.example` file with documentation
3. Update relevant environment files (`.env.development`, `.env.production`)
4. Update this documentation

## Local Development

For local development, copy `.env.example` to a new file named `.env.local` and adjust the values as needed. This file is gitignored and won't be committed.

## Deployment

When deploying to Vercel:

1. Configure all environment variables in the Vercel project settings
2. Ensure variables are set for each deployment environment (preview, production)
3. Remember that all variables must be prefixed with `VITE_` to be accessible in the client-side code

## Security Considerations

Remember that all Vite environment variables with the `VITE_` prefix are embedded in the client-side bundle and visible to users. Never include sensitive information like API keys or secrets as Vite environment variables.
