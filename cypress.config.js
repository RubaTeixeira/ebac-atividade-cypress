const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'i9mmoo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
