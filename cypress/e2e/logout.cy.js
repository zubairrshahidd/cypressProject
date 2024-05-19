import { e2e } from '../../cypress.config';
const { loginPageElements } = require('../support/elements/login.elements');
const { loginPageConstants } = require('../support/constants/login.constants');

describe('Logout Scenario', () => {


  before(() => {
    cy.visit(e2e.baseUrl)
    cy.loginOrangeHRM()
  })


  it('TC 5 | Verify user is able on logout page and redirected to login page', { tags: ['Smoke'] }, () => {

    cy.logout()

    cy.get(loginPageElements.orangeHRMLogo).should('be.visible')
    cy.url().should('include', '/login')
    cy.title().should('eq', loginPageConstants.loginPageTitle)


  })

})