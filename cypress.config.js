module.exports = {
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: "cypress/report",
    reportFilename: "report",
  },
  reporter: 'cypress-mochawesome-reporter',
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
  e2e: {
    defaultCommandTimeout: 20000,
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    baseUrlSettingsPage: 'https://xyz.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
};
