class NavigationPage {
    openMenu() {

        return cy
            .get('#react-burger-menu-btn')
            .should('be.visible')
            .click()
            .get('.bm-menu-wrap')
            .should('have.css', 'display', 'block')

        cy.get('#react-burger-menu-btn').should('be.visible')

    }


    logout() {
        cy.get('#logout_sidebar_link').click();
    }

    goToAllItems() {
        cy.get('#inventory_sidebar_link').click();
    }

    goToAbout() {
        cy.get('[data-test="about-sidebar-link"]')
            .should('have.attr', 'href', 'https://saucelabs.com/')
            .invoke('attr', 'href')
    }

    resetAppState() {
        cy.get('#reset_sidebar_link').click();
    }

    closeMenu() {
        cy.get('.bm-cross-button').click();
    }
}

export default new NavigationPage();
