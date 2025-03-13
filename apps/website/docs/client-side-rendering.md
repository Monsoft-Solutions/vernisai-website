# Client-Side Rendering with Build-Time Page Generation

This document explains how client-side rendering with build-time page generation is implemented in the VernisAI website.

## Overview

The VernisAI website uses React and Vite to implement a client-side rendering (CSR) approach with build-time page generation. This approach provides the following benefits:

- **Improved SEO**: Pre-rendered HTML files for each route
- **Faster initial load**: Critical HTML is available immediately
- **Optimized performance**: Code splitting and lazy loading
- **Smooth navigation**: Client-side routing for seamless transitions

## Implementation Details

### 1. Route Configuration

Routes are defined in `src/routes.ts` with metadata for each route:

```typescript
// Example route configuration
{
  path: '/features',
  metadata: {
    title: 'VernisAI Features - AI-Powered Workflow Automation',
    description: 'Explore the powerful features of VernisAI\'s no-code AI workflow automation platform.',
    prerender: true,
  },
}
```

Each route includes:

- `path`: The URL path
- `metadata`: SEO and pre-rendering information
    - `title`: Page title
    - `description`: Meta description
    - `prerender`: Whether to generate a static HTML file during build

### 2. Metadata Management

The `src/lib/ssg/index.ts` file provides utilities for managing route metadata:

- `getRouteMetadata`: Retrieves metadata for a specific route
- `generateMetaTags`: Generates HTML metadata tags based on route metadata

These utilities are used by the `RouteMetadata` component in `App.tsx` to set the appropriate metadata for each route.

### 3. Code Splitting and Lazy Loading

Components are lazy-loaded using React's `lazy` and `Suspense` to improve performance:

```typescript
const Home = lazy(() =>
    import('./pages/Home').then((module) => ({ default: module.Home })),
);
```

This ensures that only the necessary code is loaded when a user navigates to a specific route.

### 4. Build Process

The build process includes the following steps:

1. **Compile TypeScript**: Convert TypeScript to JavaScript
2. **Bundle assets**: Create optimized bundles with code splitting
3. **Generate HTML**: Create the main `index.html` file
4. **Pre-render routes**: Generate static HTML files for each route
5. **Generate sitemap**: Create a sitemap.xml file

### 5. Pre-rendering

The `scripts/pre-render.js` script generates static HTML files for each route during the build process:

1. Reads the route configuration
2. Creates directories for each route
3. Copies the `index.html` template to each route directory

This ensures that search engines and users receive HTML content immediately, even before JavaScript is loaded.

## How to Add a New Route

To add a new route:

1. Add the route to `src/routes.ts` with appropriate metadata
2. Create the page component in the `src/pages` directory
3. Add the route to `App.tsx` with lazy loading
4. Run the build process to generate the static HTML file

Example:

```typescript
// In routes.ts
{
  path: '/new-page',
  metadata: {
    title: 'New Page - VernisAI',
    description: 'Description of the new page',
    prerender: true,
  },
}

// In App.tsx
const NewPage = lazy(() => import('./pages/NewPage').then(module => ({ default: module.NewPage })));

// In the Routes component
<Route
  path="new-page"
  element={
    <Suspense fallback={<PageLoader />}>
      <NewPage />
    </Suspense>
  }
/>
```

## Performance Considerations

- **Bundle size**: Monitor bundle sizes to ensure fast loading
- **Code splitting**: Use dynamic imports for large components
- **Lazy loading**: Defer loading of non-critical resources
- **Caching**: Implement appropriate caching strategies

## SEO Considerations

- **Metadata**: Ensure each route has appropriate title and description
- **Structured data**: Add structured data where appropriate
- **Sitemap**: Keep the sitemap updated with all routes
- **Performance**: Optimize Core Web Vitals metrics

## Troubleshooting

If you encounter issues with pre-rendering:

1. Check that the route is defined in `src/routes.ts` with `prerender: true`
2. Ensure the `pre-render.js` script is running correctly
3. Verify that the generated HTML files are in the correct directories
4. Check for any errors in the build process

## References

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
