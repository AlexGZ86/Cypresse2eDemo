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