### cypress-pom-framework

## Web Automation Assignment
Assignment using Cypress.


# Feature
- Cypress framework with POM
- Mochawesome HTML report


# Integrations

- cypress-mochawesome-reporter

# Overview
- POM modal is implement in all of the spec files
- elements folder contains web locators
- constant folder contains the static contants from the web page
- pages folder contains the method 
- e2e folder conatins the specs
- report can be found in report folder after the execution of specs in headless mode. 

# Run tests

# Install node modules

```
npm install
```

# Assignment: Web Automation
Run assignment 1 specs using following command: 
```
npx cypress run --spec "cypress/e2e/login.cy.js,cypress/e2e/myInfo.cy.js,cypress/e2e/logout.cy.js"     
```  

# Generate Report 

Mochaawesome report will be auto generated at the end of execution, and can be found in "report" folder



## Mobile Responsive Automation

Mobile Responsive assignment using Cypress.

# Overview
- POM modal is implement in all of the spec files
- elements folder contains web locators
- constant folder contains the static contants from the web page
- pages folder contains the method 
- e2e folder conatins the specs
- report can be found in report folder after the execution of specs in headless mode. 
- Responsiveness will be verified for devices:
-- iPhone6
-- iPadMini
-- SamsungS10

# Run tests

# Install node modules

```
npm install
```

# Assignment : Mobile Responsive Automation
```
npx cypress run --spec "cypress/e2e/mobileResponsiveTesting.cy.js"
```
