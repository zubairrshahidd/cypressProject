const { profileSettingsPageElements } = require('../elements/mobileResponsiveTesting.elements');

class ResponsiveWebPage {

    assertFieldHasPlaceholder(text, selector) {
        cy.get(profileSettingsPageElements.settingForm).then((form) => {
            cy.wrap(form).contains(text).scrollIntoView().then((field) => {
                cy.wrap(field).parent().find(selector).then((placeholder) => {
                    cy.wrap(placeholder).should('have.attr', 'placeholder');
                })
            })

        })
    }
    assertFieldVisible(text, selector) {
        cy.get(profileSettingsPageElements.settingForm).then((form) => {
            cy.wrap(form).contains(text).scrollIntoView().then((field) => {
                cy.wrap(field).parent().find(selector).should('be.visible')
            })
        })
    }

    assertSelectorVisibleAndTagName(selector, tagName) {
        cy.get(profileSettingsPageElements.profileFromClass).then((form) => {
            cy.wrap(form).find(selector).scrollIntoView().then((button) => {
                cy.wrap(button).invoke('prop', 'tagName')
                    .should('eq', tagName);
            })
        })
    }

    assertDropdownNotEmpty(selector) {
        cy.get(selector)
            .find('option')
            .should('have.length.gt', 0);
    }

    isFooterVisible() {
        cy.get(profileSettingsPageElements.footerClass).should('exist');

    }

    footerTextAvaiable() {
        cy.get(profileSettingsPageElements.footerClass).then((footer) => {
            cy.wrap(footer).find(profileSettingsPageElements.leftFooterSection).should('be.visible')
            cy.wrap(footer).find(profileSettingsPageElements.rightFooterSection).should('be.visible')
        })
    }

    assertLinkVisible(selector) {
        cy.get(selector).should('be.visible')
    }

    assertLinkVisibleByText(selector, text) {
        cy.get(selector).contains(text).should('be.visible')
    }

}
export const profileSettingsPageObject = new ResponsiveWebPage();