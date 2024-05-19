/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
module.exports = (on, config) => {
  // on('file:preprocessor', cucumber())
  // require('cypress-grep/src/plugin')(config);
    require('cypress-grep/src/plugin')(config)
    return config
  }
}