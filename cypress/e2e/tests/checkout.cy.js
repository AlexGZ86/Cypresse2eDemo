import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";
import CartsPage from "../../pages/CartsPage";


describe('Checkout Flow Tests', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        ProductsPage.verifyProductPageLoaded();
    });

    it('should complete a full checkout successfully', () => {
        ProductsPage.addItemToCart('Sauce Labs Backpack');
        ProductsPage.openCart();
        CartsPage.verifyItemInCart('Sauce Labs Backpack');

        // Start checkout
        cy.get('[data-test="checkout"]').click();
        cy.url().should('include', '/checkout-step-one.html');

        // Fill checkout info
        cy.get('[data-test="firstName"]').type('John');
        cy.get('[data-test="lastName"]').type('Doe');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();

        // Verify item on overview page
        cy.url().should('include', '/checkout-step-two.html');
        cy.get('.cart_item').should('contain.text', 'Sauce Labs Backpack');

        // Finish checkout
        cy.get('[data-test="finish"]').click();

        // Verify confirmation page
        cy.url().should('include', '/checkout-complete.html');
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    });
});
