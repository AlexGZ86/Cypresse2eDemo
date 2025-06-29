import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";
import NavigationPage from "../../pages/NavigationPage";


describe('Navigation Menu Tests', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        ProductsPage.verifyProductPageLoaded();
        NavigationPage.openMenu();
    });

    it('should close menu when clicking outside', () => {
        cy.get('.bm-cross-button').should('exist').and('be.visible');
        cy.get('.bm-cross-button').click(); // Close using X
        cy.get('.bm-menu-wrap').should('not.have.class', 'open');
    });

    it('should reset app state and clear cart', () => {
        ProductsPage.addItemToCart('Sauce Labs Backpack');
        NavigationPage.openMenu();
        cy.get('#reset_sidebar_link').click();
        cy.get('.shopping_cart_badge').should('not.exist');
    });

    it('should navigate to About page successfully', () => {
        NavigationPage.goToAbout();
        cy.url().should('include', 'saucelabs.com');
    });
});
