class NavigationPage {
    openMenu() {
        cy.get('#react-burger-menu-btn').should('be.visible')
    }

    logout() {
        cy.get('#logout_sidebar_link').click();
    }

    goToAllItems() {
        cy.get('#inventory_sidebar_link').click();
    }

    goToAbout() {
        cy.get('#about_sidebar_link').click();
    }

    resetAppState() {
        cy.get('#reset_sidebar_link').click();
    }

    closeMenu() {
        cy.get('.bm-cross-button').click();
    }
}

export default new NavigationPage();
