import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";
import NavigationPage from "../../pages/NavigationPage";


describe('Navigation Menu Tests', () => {
    beforeEach(() => {
        LoginPage.login();
        ProductsPage.verifyProductPageLoaded();
        NavigationPage.openMenu()
    });

    it('should close menu when clicking x button', () => {
        cy.get('.bm-cross-button').click();
        cy.get('.bm-menu-wrap').should('not.have.class', 'open');
    });

    it('should reset app state and clear cart', () => {
        ProductsPage.addItemToCart('Sauce Labs Backpack');
        cy.get('#reset_sidebar_link').click();
        cy.get('.shopping_cart_badge').should('not.exist');
    });

    it('should navigate to About page successfully', () => {
            NavigationPage.goToAbout()

     }
    )
})