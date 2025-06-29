// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getIdSelector', (idSelector) => {
    return cy.get(`[id="${idSelector}"]`)
});
Cypress.Commands.add('getNameSelector', (nameSelector) => {
    return cy.get(`[name="${nameSelector}"]`)
});
Cypress.Commands.add('getDataTestSelector', (dataTestSelector) => {
    return cy.get(`[data-test="${dataTestSelector}"]`)
});
import LoginPage from '../pages/LoginPage';

// Create a custom Cypress command
Cypress.Commands.add('loginSession', (username, password) => {
    cy.session([username, password], () => {
        LoginPage.visit();
        LoginPage.fillUsername(username);
        LoginPage.fillPassword(password);
        LoginPage.submit();
        cy.url().should('include', '/inventory.html');
    });
});


Cypress.Commands.add("loginWithToken", () => {
    cy.request('POST', '/api/login', {
        username: Cypress.env('username'),
        password: Cypress.env('password'),
    }).then((response) => {
        window.localStorage.setItem('authToken', response.body.token);
    });
});
