import baseConfig from '../../eslint.config.js';

export default [
    ...baseConfig,
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
        rules: {
            // Disable the problematic rule
            '@typescript-eslint/no-unused-expressions': 'off',
        },
    },
    // Configuration for files outside src directory
    {
        files: ['examples/**/*.ts', 'examples/**/*.tsx', 'tsup.config.ts'],
        rules: {
            '@typescript-eslint/no-unused-expressions': 'off',
            // Disable rules that require type checking
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/restrict-plus-operands': 'off',
        },
    },
];
