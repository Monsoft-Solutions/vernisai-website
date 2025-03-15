import baseConfig from '../../eslint.config.js';

// Create a custom configuration for the database package
const customConfig = baseConfig.map((config) => {
    // Only modify the config that contains TypeScript rules
    if (
        config.files &&
        config.files.includes('**/*.{ts,tsx}') &&
        config.rules
    ) {
        return {
            ...config,
            rules: {
                ...config.rules,
                // Explicitly configure the problematic rule
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                        allowTaggedTemplates: true,
                    },
                ],
            },
        };
    }
    return config;
});

export default customConfig;
