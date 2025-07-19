import react from 'eslint-plugin-react';
import cypress from 'eslint-plugin-cypress';
import prettier from 'eslint-plugin-prettier';

export default [
    {
        ignores: ['cypress/**', 'node_modules/**', '.idea/**'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                cy: 'readonly',
                Cypress: 'readonly',
            },
        },
        plugins: {
            react,
            cypress,
            prettier,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
];