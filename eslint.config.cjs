const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const cypress = require('eslint-plugin-cypress');
const prettier = require('eslint-plugin-prettier');

module.exports = [
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