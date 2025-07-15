import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";
import CartsPage from "../../pages/CartsPage";


describe('Cart Page Tests', () => {
    beforeEach(() => {
        LoginPage.login();
        ProductsPage.verifyProductPageLoaded();
    });

    it('should persist cart items after navigating back and forth', () => {
        ProductsPage.addItemToCart('Sauce Labs Backpack');
        ProductsPage.openCart();
        cy.go('back'); // Go back to products
        ProductsPage.openCart();
        CartsPage.verifyItemInCart('Sauce Labs Backpack'); //broken to get failure in e2e
    });

    it('should display checkout button in cart', () => {
        ProductsPage.addItemToCart('Sauce Labs Backpack');
        ProductsPage.openCart();
        cy.get('[data-test="checkout"]').should('be.visible');
    });

    it('should not show cart badge when cart is empty', () => {
        ProductsPage.openCart();
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});
