const globals = require('globals')
const pluginReact = require('eslint-plugin-react')
const pluginCypress = require('eslint-plugin-cypress')
const pluginPrettier = require('eslint-plugin-prettier')

module.exports = [
    // Base ✓
    {
        ignores: ['node_modules', 'dist'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
    },
    // All JS/TS files ✓
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        plugins: {
            react: pluginReact,
            cypress: pluginCypress,
            prettier: pluginPrettier,
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                parser: '@typescript-eslint/parser',
            },
        },
        extends: [
            'eslint:recommended',
            'plugin:cypress/recommended',
            pluginReact.configs.flat.recommended,
            'plugin:prettier/recommended',
            'prettier',
        ],
        rules: {
            'no-console': 'warn',
            'cypress/no-unnecessary-waiting': 'error',
            'prettier/prettier': 'error',
        },
    },
]
