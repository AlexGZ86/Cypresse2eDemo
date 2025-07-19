import js from '@eslint/js';

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
      react: require('eslint-plugin-react'),
      cypress: require('eslint-plugin-cypress'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];