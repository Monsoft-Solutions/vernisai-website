# Naming Conventions for VernisAI Website

This document outlines the naming conventions used in the VernisAI website project to ensure consistency and maintainability.

## File Naming Conventions

### Component Files

All component files use **kebab-case** naming convention:

- ✅ `header.tsx` instead of `Header.tsx`
- ✅ `feature-card.tsx` instead of `FeatureCard.tsx`
- ✅ `mobile-nav.tsx` instead of `MobileNav.tsx`

### Page Files

All page files use **kebab-case** naming convention:

- ✅ `home.tsx` instead of `Home.tsx`
- ✅ `feature-detail.tsx` instead of `FeatureDetail.tsx`
- ✅ `waitlist-page.tsx` instead of `WaitlistPage.tsx`

### UI Component Files

All UI component files use **kebab-case** naming convention:

- ✅ `button.tsx` (already following convention)
- ✅ `logo.tsx` instead of `Logo.tsx`
- ✅ `navigation-menu.tsx` (already following convention)

### Hook Files

All hook files use **camelCase** naming convention with the `use` prefix:

- ✅ `useToast.ts` or `use-toast.ts`

## Code Naming Conventions

### TypeScript/JavaScript

- **camelCase** for variables, parameters, function names, method names, and properties

    - Example: `userId`, `calculateTotal()`, `isActive`

- **PascalCase** for class names, interface names, type aliases, and enum names

    - Example: `UserProfile`, `ApiResponse`, `RequestOptions`

- **UPPER_SNAKE_CASE** for constants and static readonly properties

    - Example: `MAX_RETRY_COUNT`, `API_BASE_URL`

- **Boolean variables** should use "is", "has", or "should" prefixes
    - Example: `isVisible`, `hasAccess`, `shouldUpdate`

## Directory Structure

Directories should use **kebab-case**:

- ✅ `ui/` (already following convention)
- ✅ `feature-components/` instead of `featureComponents/`

## Import Conventions

- Use relative imports for files within the same directory or nearby directories
- Use absolute imports for components and utilities from distant directories

## Implementation Notes

The naming conventions have been implemented using a script that:

1. Converts all PascalCase filenames to kebab-case
2. Updates all import statements to reflect the new filenames
3. Preserves the original files until the changes are verified

After running the script and verifying that everything works correctly, you can safely delete the original PascalCase files.
