# VernisAI Website Development Guide

## Commands

- **Build**: `npm run build` (tsc -b && vite build)
- **Development server**: `npm run dev` (vite)
- **Lint**: `npm run lint` (eslint .)
- **Preview build**: `npm run preview` (vite preview)

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
