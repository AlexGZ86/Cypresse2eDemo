import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginCypress from 'eslint-plugin-cypress';
import pluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/configs/recommended.js';
import eslintPluginCypressRecommended from 'eslint-plugin-cypress/lib/configs/recommended.js';
import eslintPluginReactRecommended from 'eslint-plugin-react/configs/recommended.js';
import eslintRecommended from '@eslint/js';

export default [
  // Base config
  {
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },

  // Base ESLint rules
  eslintRecommended.configs.recommended,

  // Cypress plugin rules
  eslintPluginCypressRecommended,

  // React plugin rules
  eslintPluginReactRecommended,

  // Prettier recommended
  eslintPluginPrettierRecommended,

  // Your own project rules
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react: pluginReact,
      cypress: pluginCypress,
      prettier: pluginPrettier,
    },
    rules: {
      'no-console': 'warn',
      'cypress/no-unnecessary-waiting': 'error',
      'prettier/prettier': 'error',
    },
  },
];
