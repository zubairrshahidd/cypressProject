
import { e2e } from '../../cypress.config';
const { loginPageElements } = require('../support/elements/login.elements');
const { loginPageConstants } = require('../support/constants/login.constants');
const { myInfoPageElements } = require('../support/elements/myInfo.elements');

describe('Login Scenarios', () => {

  beforeEach(() => {
    cy.visit(e2e.baseUrl)
  })

  it('TC 1| Verify user is able to access login page', { tags: ['Smoke'] }, () => {
    cy.get(loginPageElements.orangeHRMLogo).should('be.visible')
    cy.url().should('include', '/login')
    cy.title().should('eq', loginPageConstants.loginPageTitle)
  })

  it('TC 2| Verify username, password and login button is visible', { tags: ['Smoke'] }, () => {
    cy.get(loginPageElements.inputField).find(loginPageElements.usernameField).then((username) => {
      cy.wrap(username).should('be.visible').should('have.prop', 'tagName', 'INPUT');
    });
    cy.get(loginPageElements.inputField).find(loginPageElements.passwordField)
      .then((password) => {
        cy.wrap(password).should('be.visible').should('have.prop', 'tagName', 'INPUT');
      });
    cy.get(loginPageElements.loginButton)
      .then((button) => {
        cy.wrap(button).should('be.visible').should('be.enabled')
        cy.wrap(button).should('have.prop', 'tagName', 'BUTTON');
        cy.wrap(button).invoke('text').then((text) => {
          expect(text.trim()).to.equal('Login');
        })
      })
  })

  it('TC 3| Verify user is able to login to the application', { tags: ['Smoke'] }, () => {

    cy.loginOrangeHRM()
    cy.get(myInfoPageElements.dashboardGrid).should('be.visible')
    cy.get(myInfoPageElements.userProfileDropdown).should('be.visible')
    cy.get(myInfoPageElements.leftSidePanel).should('be.visible')
    cy.get(myInfoPageElements.dashboardLogo)
      .should('have.attr', 'src')
      .and('include', 'orangehrm-logo.png');
    cy.logout()
  })

})