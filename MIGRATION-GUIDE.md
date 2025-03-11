# Monorepo Migration Guide

This document outlines the steps for migrating the VernisAI website to a Turborepo-based monorepo architecture.

## Overview

We've set up a Turborepo-based monorepo with the following structure:

```
vernisai-monorepo/
├── apps/
│   └── website/     # Main VernisAI website (moved from root)
├── packages/
│   ├── ui/          # Shared UI components
│   ├── utils/       # Shared utility functions
│   └── config/      # Shared configuration files
├── turbo.json       # Turborepo configuration
└── package.json     # Root package.json
```

## Migration Steps

1. **Set up the monorepo structure**
   - Create the directory structure
   - Initialize Turborepo
   - Create package.json files for each package

2. **Move UI components to the UI package**
   - Extract reusable UI components from `/src/components/ui` to `/packages/ui/src`
   - Update imports in the website to use `@vernisai/ui`

3. **Move utility functions to the utils package**
   - Extract utility functions from `/src/lib/utils.ts` to `/packages/utils/src`
   - Update imports in the website to use `@vernisai/utils`

4. **Extract shared configuration**
   - Move ESLint, TypeScript, and Tailwind configs to the config package
   - Reference these configs from the website

5. **Move website code to apps/website**
   - Copy all source files to the apps/website directory
   - Update imports to use the new shared packages

## Running in Development

From the root directory:

```bash
npm install
npm run dev
```

## Building

From the root directory:

```bash
npm run build
```

The website will be built to `apps/website/dist`.

## Next Steps

- [ ] Move UI components to the UI package
- [ ] Move utility functions to the utils package
- [ ] Extract shared configuration
- [ ] Set up CI/CD pipeline for the monorepo