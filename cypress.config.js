// cypress.config.js
require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  },

  e2e: {
    baseUrl: process.env.BASE_URL,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      return config;
    }
  },

  viewportWidth: 1800,
  viewportHeight: 1280,


  retries: {
    runMode: 1,
    openMode: 0
  },

  defaultCommandTimeout: 8000,
  pageLoadTimeout: 31000,

  experimentalMemoryManagement: true,

  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videoCompression: true,
  videosFolder: 'cypress/videos'
});