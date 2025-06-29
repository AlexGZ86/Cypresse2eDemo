require('dotenv').config(); // ✅ Add this at the top

const {defineConfig} = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: process.env.BASE_URL, // ✅ Use env var from GitHub/locally
        env: {
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            accessToken: process.env.ACCESS_TOKEN,
        },
        viewportWidth: 1500,
        viewportHeight: 1200,
        retries: {
            runMode: 1,
            openMode: 0,
        },
        defaultCommandTimeout: 8000,
        pageLoadTimeout: 31000,
        video: true,
        videoCompression: true,
        screenshotOnRunFailure: true,
    }
});
