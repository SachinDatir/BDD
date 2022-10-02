
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


// Given('visit Ecomm site', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login/')
// })
// When('I enter username', (data) => {
//     data.hashes().forEach(element => {
//         cy.get('#username').type(element.username)
//     })
// })
// And('I enter password', (data) => {
//     data.hashes().forEach(element => {
//         cy.get('#password').type(element.password)
//     })
// })
// And('click on login button', () => {
//     cy.get('#submit').click()
// })
// Then('Validate Dashboard', () => {
//     cy.get('.post-title').should('have.text', 'Logged In Successfully')
// })

Given('visit practice automation registration site', () => {
    cy.log('block 1')
    //cy.visit('https://practicetestautomation.com/practice-test-login/')
})
When('users Login with {Email} & {password}', (username, password) => {
    cy.log('block 1')
    // cy.get('#reg_email').type(username)
    // cy.get('#reg_password').type(password)
})

And('Click on registor button', () => {
    cy.log('block 1')
})
Then('dashboard should be visible', () => {
    cy.log('block 1')
})



Given('visit practice autumation testing site', () => {
    cy.log('block 1')
    cy.visit('https://practice.automationtesting.in/my-account/')
})
When('User login with {string} and {string}', (username, password) => {
    cy.log('block 1')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
})
And('click on the login button', () => {
    cy.log('block 1')
    cy.get('input[name="login"]').click()
})
Then('dashboard is visible', () => {
    cy.log('block 1')
    cy.get('.is-active>a').should('have.text', 'Dashboard')
})