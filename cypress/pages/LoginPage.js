class LoginPage {
    visit() {
        cy.visit('/');
    }

    fillUsername(username = Cypress.env('username')) {
        return cy.get('[data-test="username"]')
            .clear()
            .type(username);
    }

    fillPassword(password = Cypress.env('password')) {
        return cy.get('[data-test="password"]')
            .clear()
            .type(password);
    }

    submit() {
        return cy.get('[data-test="login-button"]').click();
    }

    login() {
        this.visit();
        this.fillUsername();
        this.fillPassword();
        return this.submit();
    }
}

export default new LoginPage();