
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
let file = 'Health-Benefits-Of-Red-Wine__01'

// Given('I open Automation Exercise site', () => {
//     cy.log('block 1')
//     cy.visit('https://www.automationexercise.com/login')
//     cy.get('.signup-form').should('be.visible')
//     cy.get('input[type="text"]').type('Sachin Datir')
//     cy.get('input[data-qa="signup-email"]').type('Sachin@gmail.com')
//     cy.get('button[data-qa="signup-button"]').click()
// })
// Then('Validate the Home page', () => {
//     cy.log('block 1')
//     cy.get('#header').should('be.visible')
// })
Given('I open Automation Exercise site', () => {
    cy.visit('https://www.automationexercise.com/login')
})
When('I open exercise for login', () => {
    cy.log("block 1")
    cy.get('.login-form h2').should('have.text', 'Login to your account')
    cy.get('input[data-qa="login-email"]').type('Sachin@gmail.com')
    cy.get('input[name="password"]').type('SAchinDatir@')
    cy.get('button[ data-qa="login-button"]').click()
})
Then('validate the login homepage', () => {
    cy.log("block 2")
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
})

Given('Open the Cantact Page', () => {
    cy.log('block1')
    cy.get('[href="/contact_us"]').click()
    cy.get('.title.text-center').eq(1).should('have.text', 'Get In Touch')
})
When('Add your details', () => {
    cy.log('block1')
    cy.get('input[data-qa="name"]').type('Sachin')
    cy.get('input[data-qa="email"]').type('Sachin@gmail.com')
    cy.get('input[data-qa="subject"]').type('inquiry of product')
    cy.get('#message').type('to know the product visibility')
    cy.get('input[data-qa="name"]').attachFile(file)
    cy.get('input[data-qa="submit-button"]').click()
})
Then('Validate the Success msg', () => {
    cy.log('block1')
    cy.get('.status.alert.alert-success').should("have.text", "Success! Your details have been submitted successfully.")
})