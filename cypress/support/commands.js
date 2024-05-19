const { loginPageElements } = require('./elements/login.elements');
const { myInfoPageElements } = require('./elements/myInfo.elements');
const { logoutPageElements } = require('./elements/logout.elements');


Cypress.Commands.add("isVisibleAndPlaceholder", (xpath, text) => {
  cy.get(xpath).should('be.visible').and("have.attr", "placeholder", text);
})

Cypress.Commands.add("isVisibleByAutoIdAndText", (selector, text) => {
  return cy.getByAutoId(selector).should('be.visible').and("have.text", text);
})

Cypress.Commands.add("isVisibleAndText", (xpath, text) => {
  cy.get(xpath).should('be.visible').and("contain", text);
})
Cypress.Commands.add("isVisibleByText", (text) => {
  cy.contains(text).should('be.visible');
})

Cypress.Commands.add("getByClass", (selector, ...args) => {
  return cy.get(`[class*=${selector}]`, ...args);
});

Cypress.Commands.add("getByAutoId", (selector, ...args) => {
  return cy.get(`[auto-id=${selector}]`, ...args);
})

Cypress.Commands.add("loginOrangeHRM", () => {
  let data
  let email
  let password

  data = Cypress.env('orangeHRMUser')
  cy.log(data)
  email = data.loginUsername
  password = data.loginPassword

  cy.isVisibleAndPlaceholder(loginPageElements.userName, 'Username');
  cy.isVisibleAndPlaceholder(loginPageElements.password, 'Password');
  cy.get(loginPageElements.inputField).find(loginPageElements.usernameField).type(email);
  cy.get(loginPageElements.inputField).find(loginPageElements.passwordField).type(password);
  cy.get(loginPageElements.loginButton).should('be.enabled')
  cy.isVisibleAndText(loginPageElements.loginButton, "Login").click();
  cy.get(myInfoPageElements.dashboardHeader).should('be.visible')
})

Cypress.Commands.add("logout", () => {

  cy.get(logoutPageElements.avatar).click()
  cy.get(logoutPageElements.avatarMenu).should('be.visible').contains('Logout').click();
  cy.isVisibleAndText(loginPageElements.loginButton, "Login")
})



