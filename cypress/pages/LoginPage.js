
class LoginPage {
    visit() {
        cy.visit('/');
    }

    fillUsername(username) {
        cy.get('[data-test="username"]').clear().type(username);
    }

    fillPassword(password) {
        cy.get('[data-test="password"]').clear().type(password);
    }

    submit() {
        cy.get('[data-test="login-button"]').click();
    }

    login(username, password) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.submit();
    }
}

export default new LoginPage();