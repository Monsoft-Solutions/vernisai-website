# VernisAI Website

This directory contains the main VernisAI marketing website.

## Features

- React 19 with TypeScript
- Vite for fast development and optimized builds
- Tailwind CSS for styling
- Responsive design for all device sizes
- SEO optimized with meta tags and sitemap generation
- Radix UI primitives for accessible components

## Development Commands

- **Start Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Preview Build**: `npm run preview`
- **Lint**: `npm run lint`
- **Format**: `npm run format`
- **Type Check**: `npm run typecheck`
- **Validate (Lint + Format + Type Check)**: `npm run validate`

## Sitemap Generation

This website includes an automatic sitemap generation script that runs during the build process. The sitemap includes:

- All static routes
- Dynamic routes for action categories (`/features/actions/:categoryId`)
- Dynamic routes for use cases (`/use-cases/:id`)

### Maintaining Dynamic Routes

When adding new action categories or use cases, you need to update the corresponding IDs in the sitemap generator:

1. Open `scripts/generate-sitemap.js`
2. Add new category IDs to the `actionCategoryIds` array
3. Add new use case IDs to the `useCaseIds` array

The sitemap is automatically generated during the build process, but you can also generate it manually:

```bash
node scripts/generate-sitemap.js
```

## Deployment

This website is deployed using Vercel with continuous deployment from the main branch.
