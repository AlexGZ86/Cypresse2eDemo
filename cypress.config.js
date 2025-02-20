const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'https://www.saucedemo.com/',

        root: true,
        env: {
            node: true,
            browser: true,
            es2021: true,
            'cypress/globals': true
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
});
