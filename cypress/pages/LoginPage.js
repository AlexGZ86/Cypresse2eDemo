class LoginPage {
    visit() {
        cy.visit('/');
    }

    fillUsername(username = Cypress.env('username')) {
        return cy.get('[data-test="username"]')
            .clear()
            .type(username,{delay:20});
    }

   fillPassword(password = Cypress.env('password')) {
        return cy.get('[data-test="password"]').click()
            .type(password,{delay:20});
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
