import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

Given('I open  Orange Hrm site', function () {
    cy.log('block 1')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('I enter username and password', function () {
    cy.log('block 2')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

})
Then('Validate the Dashboard', function () {
    cy.log('block 3')
    cy.get('a[href="#"]').first().should('have.text', 'Employee List')
})