import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginCypress from 'eslint-plugin-cypress';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
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
