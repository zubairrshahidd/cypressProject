// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events/support";
const moment = require('moment-timezone');
import 'cypress-moment-timezone';
// require('cypress-failed-log')
require('cypress-grep')()

// Alternatively you can use CommonJS syntax:
// require('./commands')