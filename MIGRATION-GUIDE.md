# Migration Guide: From Single Project to Monorepo

This guide will help you migrate from the previous single-project structure to the new Turborepo monorepo structure.

## Overview of Changes

The VernisAI website project has been restructured into a Turborepo monorepo with the following organization:

```text
vernisai-monorepo/
├── apps/
│   └── website/       # Main VernisAI website
├── packages/
│   ├── ui/            # Shared UI components
│   ├── utils/         # Shared utility functions
│   └── config/        # Shared configuration files
├── turbo.json         # Turborepo configuration
└── package.json       # Root package.json
```

## Migration Steps

### 1. Clone the New Repository

```bash
git clone https://github.com/Monsoft-Solutions/vernisai-website.git
cd vernisai-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Update Import Paths

If you have existing code that imports components or utilities, you'll need to update the import paths to use the new package structure:

**Before:**

```typescript
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';
```

**After:**

```typescript
import { Button } from '@vernisai/ui';
import { cn } from '@vernisai/utils';
```

### 4. Running Commands

Commands are now run from the root of the monorepo and use Turborepo to manage dependencies between packages:

**Before:**

```bash
npm run dev
npm run build
```

**After:**

```bash
# Run for all packages
npm run dev
npm run build

# Run for specific packages
npm run dev -- --filter=website
npm run build -- --filter=@vernisai/ui
```

### 5. Adding New Components

When adding new components, consider whether they should be:

- **Website-specific**: Add to `apps/website/src/components`
- **Shared UI components**: Add to `packages/ui/src/components`
- **Shared utilities**: Add to `packages/utils/src/lib`

## Troubleshooting

### TypeScript Path Aliases

If you encounter TypeScript errors related to import paths, ensure your `tsconfig.json` includes the correct path aliases:

```json
{
    "compilerOptions": {
        "paths": {
            "@vernisai/ui": ["./packages/ui/src"],
            "@vernisai/utils": ["./packages/utils/src"]
        }
    }
}
```

### Package Dependencies

If you need to add a dependency to a specific package, navigate to that package directory and add it:

```bash
cd packages/ui
npm install some-package
```

For more detailed information, see the [Next Steps](./NEXT-STEPS.md) document.
