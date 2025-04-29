const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
    },
  },
  viewportWidth: 1280,
  viewportHeight: 1000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 31000,
});