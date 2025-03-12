# VernisAI Website

This is the main website for VernisAI, built with React, Vite, and TypeScript.

## Getting Started

### Environment Setup

The application uses environment variables for configuration. Follow these steps to set up your environment:

1. Run the setup script to create a `.env` file from the template:

```bash
npm run setup:env
```

2. Open the `.env` file and update the values as needed.

### Environment Variables

The application uses Zod to validate environment variables. All environment variables are defined and validated in the `@vernisai/utils` package.

- Client-side variables must be prefixed with `VITE_` to be exposed to the browser
- Server-side variables are only available during build time or in server components
- Required variables are marked with [REQUIRED] in the `.env.example` file
- The application will throw an error at startup if any required variables are missing

#### Required Environment Variables

- `VITE_API_URL`: The URL for the backend API services

### Using Environment Variables

Import the environment utilities from the local `env.ts` file:

```typescript
import { getClientEnv } from '@/env';

// Access a client-side environment variable with a default value
const apiUrl = getClientEnv('VITE_API_URL', 'http://localhost:3000/api');

// Access a feature flag
const analyticsEnabled = getClientEnv('VITE_ENABLE_ANALYTICS', false);

if (analyticsEnabled) {
    // Initialize analytics
}
```

## Development

To start the development server:

```bash
npm run dev
```

## Building

To build the application:

```bash
npm run build
```

## Validation

To validate the application (typecheck, lint, and format):

```bash
npm run validate
```
