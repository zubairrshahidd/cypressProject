import 'cypress-xpath'
import { e2e } from '../../cypress.config';
import { myInfoObject } from '../support/pages/myInfo.page';
const { myInfoPageElements } = require('../support/elements/myInfo.elements');
const { myInfoPageConstants } = require('../support/constants/myInfo.constants');

describe('My Info Scenarios', () => {

    before(() => {
        cy.visit(e2e.baseUrl)
        cy.loginOrangeHRM()
    })

    after(() => {
        cy.logout();
    })

    it('TC 4| Verify User is able to update his DOB', { scrollBehavior: false }, () => {
        const dayjs = require('dayjs')
        const currentDate = dayjs().format('MM/DD/YYYY')
        myInfoObject.sideMenuMyInfoSelector().click()
        myInfoObject.personalDetailsHeader().should('be.visible')    
        myInfoObject.dateOfBirthField().should('be.visible')
        const dobSelector = myInfoObject.dateOfBirthField()
        const desiredDOB = myInfoPageConstants.desiredDateOfBirth
        myInfoObject.selectDate(dobSelector, currentDate, desiredDOB)
        myInfoObject.personalDetailsSaveButton().click()
        myInfoObject.successToadMessage()
    })
})