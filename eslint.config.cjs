const js = require('@eslint/js');
const prettier = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');
const cypress = require('eslint-plugin-cypress');

module.exports = [
    {
        ignores: ['node_modules/**', '.idea/**'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            prettier,
            react,
            cypress,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
];