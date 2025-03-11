# Next Steps After Monorepo Migration

This document outlines the next steps and best practices for working with the VernisAI monorepo structure.

## Recommended Workflows

### Adding New Features

1. **Identify the scope**: Determine if your feature belongs in a specific app or should be shared across multiple apps.
2. **Create a feature branch**: Always work in a feature branch (e.g., `feat/feature-name`).
3. **Implement shared components first**: If your feature requires shared components, implement them in the appropriate package first.
4. **Implement app-specific code**: Then implement the app-specific code that uses the shared components.
5. **Create a PR**: Create a pull request that references the relevant issue.

### Updating Shared Components

When updating shared components:

1. Consider the impact on all consuming applications
2. Add appropriate tests to ensure backward compatibility
3. Document any breaking changes clearly

## Package Management

### Adding Dependencies

- **App-specific dependencies**: Add to the app's package.json

    ```bash
    cd apps/website
    npm install some-package
    ```

- **Shared dependencies**: Add to the appropriate package

    ```bash
    cd packages/ui
    npm install some-package
    ```

- **Development dependencies**: Add to the root package.json if used across the monorepo
    ```bash
    npm install -D some-dev-package -w
    ```

### Versioning

Currently, all packages use `0.0.0` as their version. In the future, we plan to implement:

1. **Changesets**: For version management and changelog generation
2. **Semantic versioning**: Following semver for all packages

## Code Organization

### UI Components

- Place reusable UI components in `packages/ui/src/components`
- Follow the established patterns for component structure:
    - Use React.forwardRef for components that might need refs
    - Export component types for better developer experience
    - Include proper displayName for debugging

### Utilities

- Place shared utilities in `packages/utils/src/lib`
- Keep utilities focused and well-tested
- Document utilities with JSDoc comments

### Configuration

- Place shared configuration in `packages/config`
- Keep configurations modular and extensible

## Future Improvements

1. **Implement Changesets**: For better version management and changelog generation
2. **Add Comprehensive Testing**: Implement Jest and React Testing Library tests for all packages
3. **Improve Documentation**: Add more detailed documentation for each package
4. **Optimize Build Process**: Further optimize the build process for faster development and production builds
5. **Add Storybook**: For better component development and documentation

## Troubleshooting Common Issues

### TypeScript Path Resolution

If you encounter TypeScript path resolution issues:

1. Ensure your `tsconfig.json` has the correct path mappings
2. Run `npm run typecheck` to verify TypeScript configuration
3. Check that package imports use the correct syntax (e.g., `@vernisai/ui` instead of relative paths)

### Build Issues

If you encounter build issues:

1. Run `npm run clean` to clean all build artifacts
2. Ensure all dependencies are installed with `npm install`
3. Check for circular dependencies between packages

### Turborepo Cache Issues

If Turborepo caching behaves unexpectedly:

1. Run `npx turbo clean` to clear the Turborepo cache
2. Ensure your `turbo.json` configuration is correct

## Getting Help

If you encounter any issues not covered in this guide, please:

1. Check the existing GitHub issues
2. Create a new issue with detailed information about your problem
3. Reach out to the development team on Slack
