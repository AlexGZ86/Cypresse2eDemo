import globals from "globals";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    module.exports = {
        root: true,
        env: {
            node: true,
            es2021: true,
            browser: true,
        },
        extends: [
            'eslint:recommended',
            'plugin:cypress/recommended'
        ],
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: ['cypress'],
        rules: {
            'no-console': 'warn',
            'cypress/no-unnecessary-waiting': 'error'
        }
    },
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: {globals: globals.browser}},
    pluginReact.configs.flat.recommended,
];