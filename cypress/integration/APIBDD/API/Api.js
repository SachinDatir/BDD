import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
Given('User sent the request to get user list', () => {
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    }).as('getUsers')
})
Then('Users list should be display', () => {
    cy.get('@getUsers').then((res) => {
        cy.get(res)
        expect(res.status).to.eq(200)
        expect(res.body.data[0].id).to.eq(7)
        expect(res.body.data[0].email).contains('michael.lawson@reqres.in')
    })
})

Given("User sent the request to create new user with {string} and job {string}", (name, job) => {
    cy.log('block 1')
    cy.request({
        method: "POST",
        url: 'https://reqres.in/api/users',
        body: {
            "name": name,
            "job": job
        }
    }).as("createUser")
})
Then("User should be created with {string} and job {string}", (name, job) => {
    cy.log('block 1')
    cy.get('@createUser').then((response) => {
        cy.log(response)
        expect(response.status).to.eq(201)
        expect(response.statusText).to.eq("Created")
        expect(response.body.name).to.eq(name)
        expect(response.body.job).to.eq(job)
    })

})

Given("User sent the request to update user with {string} and job {string}", (name, job) => {
    cy.log('block 1')
    cy.request({
        method: "PUT",
        url: 'https://reqres.in/api/users/2',
        body: {
            name: name,
            job: job
        }
    }).as('userUpdate')
})

Then("User should be update with {string} and job {string}", (name, job) => {
    cy.log('block 2')
    cy.get('@userUpdate').then((res) => {
        cy.log(res)
        expect(res.status).to.eq(200)
    })
})


And("User sent the request to Delete with {string} and job {string}", (name, job) => {
    cy.log('block 5')
    cy.request({
        method: "DELETE",
        url: "https://reqres.in/api/users/2",
        body: {
            name: name,
            job: job
        }
    }).as('userDelete')
})
Then("User should be Delete with {string} and job {string}", (name,job) => {
    cy.log('block 6')
    cy.get('@userDelete').then((res)=>{
        cy.log(res)
        expect(res.status).to.eq(204)
    })

}) 