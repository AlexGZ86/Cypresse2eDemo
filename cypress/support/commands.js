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
Cypress.Commands.add("login", () => {
    //cy.session('user-session', () => {
        cy.visit('/')
      // cy.visit('https://www.saucedemo.com/')
        cy.get(`[id=user-name]`).type('standard_user'); // Adjust to your username field
        cy.get(`[id=password]`).type('secret_sauce'); // Adjust to your password field
        cy.get(`[id=login-button]`).click(); // Adjust to your login button
//        cy.url().should('include', '/inventory.html');
        cy.wait(3000)

});
Cypress.Commands.add("loginWithToken", () => {
    cy.request('POST', '/api/login', {
        username: 'standard_user',
        password: 'secret_sauce'
    }).then((response) => {
        window.localStorage.setItem('authToken', response.body.token);
    });
});
