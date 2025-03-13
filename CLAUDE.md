# VernisAI Website Development Guide

## Commands

- **Build**: `npm run build` (runs typecheck, build:only, and generate-sitemap)
- **Development server**: `npm run dev` (vite)
- **Validate Lint and Prettier**: `npm run validate`
- **Preview build**: `npm run preview` (vite preview)
- **Build with Pre-rendering**: `npm run build:with-prerender` (runs build followed by pre-render)
- **Standalone Pre-render**: `npm run pre-render:standalone` (pre-renders without requiring a build)
- **Sitemap + Pre-render**: `npm run sitemap-prerender` (generates sitemap and pre-renders in one step)

## Tech Stack

- React
- Vite
- Tailwinds
- Shacdn
- Lucide
- lenis (for scrolling animations)

## Code Style Guidelines

- **Files**: Use kebab-case for all components, pages, and UI files (e.g., `feature-card.tsx`)
- **Code**: PascalCase for components/types, camelCase for functions/variables, UPPER_SNAKE_CASE for constants
- **Imports**: Relative for nearby files, absolute for distant components/utilities
- **Components**: Use TypeScript for props, extract common patterns, focus on reusability
- **Styling**: Utility-first Tailwind approach, consistent class ordering (layout → typography → visual)
- **Accessibility**: Use semantic HTML, keyboard navigation, ARIA attributes when needed
- **Style Guidelines**: RE-used components, implement elements as components so we can re-used them, follow the styles of other pages and components

## React Patterns

- Boolean props use "is"/"has"/"should" prefixes (e.g., `isVisible`, `hasAccess`)
- Extract reusable components to appropriate directories
- Implement responsive behavior consistently using Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Honor reduced motion preferences for animations
- Document component props clearly with TypeScript interfaces

## Error Handling

- Use TypeScript to prevent type errors
- Implement form validation with Zod and react-hook-form
- Provide helpful error messages to users
- Log errors appropriately in development

## TypeScript

- Avoid the use of interface, prefer type
- Don't declare multiple types, functions, classes in the same file
- Add descriptive and concise comments to functions, types and data. For complicated functions, comment parts of the code.
- Use the best practices, the code should be extensible and clean

## SEO and Pre-rendering

- All pages have proper schema.org structured data
- Use SEO component to add metadata and structured data
- Products must include price information in schema
- Run `npm run sitemap-prerender` to generate pre-rendered HTML for all routes
- Pre-rendered pages help search engines index content properly

## Make sure the code is clean

- Run `npm run validate`, and fix possible issues
- Run `npm run build` and fix possible issues
- Run `npm run sitemap-prerender` after building to generate pre-rendered pages for SEO

## FInal Action

- After each run of the agent, modify the right file in the /changes folder. Each has a name format: yyyy-mm-dd.md. You will add using a concise title that decribe the changes (##) and bullet point with the changes
