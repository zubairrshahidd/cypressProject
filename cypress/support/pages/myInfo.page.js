const { myInfoPageElements } = require('../elements/myInfo.elements');
const { myInfoPageConstants } = require('../constants/myInfo.constants');
const { dashboardPageConstants } = require('../constants/dashboard.constants');
class MyInfo {
    selectDate(dateOfBirthField, currentDate, desiredDate) {
        dateOfBirthField.click()
        cy.log("currentDate", currentDate)
        let currentDateList = currentDate.split('/')
        let currentMonthValue = currentDateList[0]
        let currentDateValue = currentDateList[1]
        let currentYearValue = currentDateList[2]

        cy.log("desiredDate", desiredDate)
        let desiredDateList = desiredDate.split('/')
        let desiredMonthValue = parseInt(desiredDateList[0])
        let desiredDateValue = parseInt(desiredDateList[1])
        let desiredYearValue = parseInt(desiredDateList[2])
        cy.log('Calender Opened')
        //   Select Desired Year
        let desiredYear = desiredYearValue;
        cy.get(myInfoPageElements.dateYearChevronIcon).click()

        cy.get(myInfoPageElements.yearList)
            .should('be.visible')
            .within(() => {
                cy.get(myInfoPageElements.yearListItem).each(($li) => {
                    cy.wrap($li)
                        .invoke('text')
                        .then((text) => {
                            if (text.includes(desiredYear)) {
                                cy.wrap($li).scrollIntoView().click(); // Click on the desired year when found
                            }
                        });
                });
            });
        //   Select Desired Month
        const allMonths = {
            "1": "January",
            "2": "February",
            "3": "March",
            "4": "April",
            "5": "May",
            "6": "June",
            "7": "July",
            "8": "August",
            "9": "September",
            "10": "October",
            "11": "November",
            "12": "December",
        };
        const monthKeys = Object.keys(allMonths)
        cy.log('months keys', monthKeys)
        cy.log('current month', currentMonthValue)
        cy.log('desired month', desiredMonthValue)
        let currentMonthIndex = parseInt(currentMonthValue);
        const desiredMonthIndex = parseInt(desiredMonthValue);
        let desiredMonthAppeared = desiredMonthIndex === currentMonthIndex;
        let breakCount = 0;
        while (!desiredMonthAppeared) {
            if (desiredMonthIndex < currentMonthIndex) {
                cy.get(myInfoPageElements.previousMonthChevronIcon).click()
                currentMonthIndex--;
            } else {
                cy.get(myInfoPageElements.nextMonthChevronIcon).click()
                currentMonthIndex++;
            }
            desiredMonthAppeared = desiredMonthIndex === currentMonthIndex;
            cy.log('desiredMonthAppeared :', desiredMonthAppeared)

            breakCount++;
            if (breakCount > monthKeys.length || desiredMonthAppeared) {
                // if somehow this goes in infinite loop, we need to handle that
                break;
            }
        }
        if (desiredMonthAppeared) {
            cy.log('you are on the desired month', desiredMonthAppeared)
            cy.get(myInfoPageElements.dateSelector)
                .contains(desiredDateValue, { matchCase: true }).click()

        }
    }

    dateOfBirthField() {
        return cy.get(myInfoPageElements.myInfoFormFields).then($dob => {
            return cy.wrap($dob).contains(myInfoPageConstants.dateOfBirthField)
                .then($el => {
                    return cy.wrap($el).parent().parent().find(myInfoPageElements.dateInput).should('be.visible')
                })

        })
    }

    sideMenuMyInfoSelector() {
        return cy.get(myInfoPageElements.sidePanelList).find(myInfoPageElements.sidePanelListItem)
            .contains(dashboardPageConstants.leftMenuItemMyInfo)
    }

    personalDetailsHeader() {
        return cy.get(myInfoPageElements.myInfoPageTitle).contains(myInfoPageConstants.headerPersonalDetails).should('be.visible')

    }

    successToadMessage() {
        return cy.get(myInfoPageElements.successToast).should('be.visible')
    }

    personalDetailsSaveButton() {
        return this.personalDetailsHeader()
            .then($el => {
                return cy.wrap($el).parent().find('.oxd-button')
            })
    }

}
export const myInfoObject = new MyInfo();