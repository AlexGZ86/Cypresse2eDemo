import {PASSWORD, USERS} from "../utils";

export function login() {

    cy.getIdSelector(`user-name`).should("exist").type(USERS.STANDARD_USER);
    cy.getIdSelector(`password`).should("exist").type(PASSWORD);
}

export function invalidLogin() {

    cy.getIdSelector('user-name').should("exist").type(USERS.LOCKEDOUT_USER);
    cy.getIdSelector('password').should("exist").type(PASSWORD);
}

export function clickLoginBtn() {
    cy.getIdSelector('login-button').click();
}
