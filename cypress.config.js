const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app',
    videosFolder: 'cypress/results/videos',
    screenshotsFolder: 'cypress/results/screenshots',
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
