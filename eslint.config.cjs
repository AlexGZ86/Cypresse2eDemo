const js = require("@eslint/js");
const prettier = require("eslint-plugin-prettier");
const cypress = require("eslint-plugin-cypress");

module.exports = [
  {
    ignores: ["node_modules/**", ".idea/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        cy: "readonly",
        Cypress: "readonly",
      },
    },
    plugins: {
      prettier,
      cypress,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
