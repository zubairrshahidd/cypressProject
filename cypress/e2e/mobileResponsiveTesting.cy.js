import { e2e } from '../../cypress.config';
const { profileSettingsPageObject } = require('../support/pages/mobileResponsiveTesting.page');
const { profileSettingsPageElements } = require('../support/elements/mobileResponsiveTesting.elements');
const { profileSettingsPageConstants } = require('../support/constants/mobileResponsiveTesting.constants');

describe('Web Responsiveness Scenarios', () => {

    beforeEach(() => {
        cy.visit(e2e.baseUrlSettingsPage, { failOnStatusCode: false })
    })
    it('TC | Verify Profile settings page is responsive', { scrollBehavior: false }, () => {

        const mobileProfiles = {
            "iPhone6": "iphone-6",
            "iPadMini": "ipad-mini",
            "SamsungS10": "samsung-s10"
            
        };
        cy.get(profileSettingsPageElements.settingLink).contains('Settings').click();
       
        Object.keys(mobileProfiles).forEach((profileName) => {
            const profileValue = mobileProfiles[profileName]; 
            cy.wrap(profileValue).then((profile) => {
                cy.wait(500)
                cy.viewport(profile)
                if (profileName == 'iPadMini') {
                    profileSettingsPageObject.assertLinkVisibleByText(profileSettingsPageElements.navBar, 'Markets')
                    profileSettingsPageObject.assertLinkVisibleByText(profileSettingsPageElements.navBar, 'Settings')
                    profileSettingsPageObject.assertLinkVisibleByText(profileSettingsPageElements.navBar, 'Contact Us')
                } else {
               
                    profileSettingsPageObject.assertLinkVisible(profileSettingsPageElements.navBarToggle)
                }
            });
            profileSettingsPageObject.assertLinkVisible(profileSettingsPageElements.headerNavigator)
            profileSettingsPageObject.assertLinkVisible(profileSettingsPageElements.profileHeading)
            profileSettingsPageObject.assertFieldVisible(profileSettingsPageConstants.salutation, profileSettingsPageElements.salutationId)
            profileSettingsPageObject.assertSelectorVisibleAndTagName(profileSettingsPageElements.salutationId, 'SELECT')
            profileSettingsPageObject.assertDropdownNotEmpty(profileSettingsPageElements.salutationId)
            profileSettingsPageObject.assertFieldHasPlaceholder(profileSettingsPageConstants.firstName, profileSettingsPageElements.firstNameId)
            profileSettingsPageObject.assertFieldHasPlaceholder(profileSettingsPageConstants.lastName, profileSettingsPageElements.lastNameId)
            profileSettingsPageObject.assertFieldVisible(profileSettingsPageConstants.dateOfBirth, profileSettingsPageElements.dateOfBirthId)
            profileSettingsPageObject.assertFieldVisible(profileSettingsPageConstants.address, profileSettingsPageElements.addressId)
            profileSettingsPageObject.assertFieldVisible(profileSettingsPageConstants.city, profileSettingsPageElements.cityId)
            profileSettingsPageObject.assertFieldVisible(profileSettingsPageConstants.state, profileSettingsPageElements.stateId)
            profileSettingsPageObject.assertFieldVisible(profileSettingsPageConstants.zip, profileSettingsPageElements.zipId)
            profileSettingsPageObject.assertFieldHasPlaceholder(profileSettingsPageConstants.phoneNumber, profileSettingsPageElements.phoneNumberId)
            profileSettingsPageObject.assertFieldHasPlaceholder(profileSettingsPageConstants.emailAddress, profileSettingsPageElements.emaiId)
            profileSettingsPageObject.assertFieldHasPlaceholder(profileSettingsPageConstants.website, profileSettingsPageElements.websiteId)
            profileSettingsPageObject.assertSelectorVisibleAndTagName(profileSettingsPageElements.submitProfileButton, 'BUTTON')
            profileSettingsPageObject.isFooterVisible()
            profileSettingsPageObject.footerTextAvaiable()
        });
    });
})



