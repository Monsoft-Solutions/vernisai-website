# Next Steps for Monorepo Migration

## 1. Move Source Files to apps/website

```bash
# Copy source files to apps/website
cp -r src/* apps/website/src/
cp -r public/* apps/website/public/
cp index.html apps/website/
cp vite.config.ts apps/website/
cp tsconfig.json apps/website/
cp postcss.config.js apps/website/
cp tailwind.config.js apps/website/
cp eslint.config.js apps/website/
```

## 2. Move UI Components to the UI package

Identify reusable UI components in `src/components/ui` and move them to the `packages/ui/src` directory:

```bash
# First, create the necessary structure
mkdir -p packages/ui/src/components

# Move UI components
cp -r src/components/ui/* packages/ui/src/components/
```

Update the UI package's index.ts to export all components:

```typescript
// packages/ui/src/index.ts
export * from './components/button';
export * from './components/badge';
// Add more exports
```

## 3. Move Utility Functions to the Utils package

```bash
# Create necessary structure
mkdir -p packages/utils/src/lib

# Move utility functions
cp src/lib/utils.ts packages/utils/src/lib/
```

Update the utils package's index.ts:

```typescript
// packages/utils/src/index.ts
export * from './lib/utils';
```

## 4. Move Configuration to the Config package

```bash
# Copy configuration files
cp tsconfig.json packages/config/typescript/base.json
cp tailwind.config.js packages/config/tailwind/index.js
cp eslint.config.js packages/config/eslint/index.js
```

## 5. Update Imports in the Website

After moving components and utilities, update imports in the website code:

```typescript
// Before
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// After
import { Button } from '@vernisai/ui';
import { cn } from '@vernisai/utils';
```

## 6. Update Build Configuration

Modify `apps/website/vite.config.ts` to handle the new structure:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

## 7. Install Dependencies

```bash
# Install dependencies in the root package
npm install

# Build all packages
npm run build
```

## 8. Test the Development Environment

```bash
# Run the development server
npm run dev
```

## 9. Clean Up

Once everything is working:

```bash
# Remove duplicated files from the root
rm -rf src public index.html
```

## 10. Update Git Configuration

Ensure `.gitignore` is properly configured for the monorepo structure, adding:

```
# Turborepo
.turbo/

# Dependencies
node_modules/

# Build outputs
dist/
.next/

# Logs
*.log
```