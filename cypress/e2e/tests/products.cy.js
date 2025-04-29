import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";

describe('Products Page Tests', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        ProductsPage.verifyProductPageLoaded();
    });

    it('should display products after successful login', () => {
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_item').should('have.length.greaterThan', 0);
    });

    it('should display correct product names and prices', () => {
        cy.get('.inventory_item').each(($item) => {
            cy.wrap($item).find('.inventory_item_name').should('be.visible');
            cy.wrap($item).find('.inventory_item_price').should('be.visible');
        });
    });

    it('should sort products by Price Low to High', () => {
        ProductsPage.sortByPriceLowToHigh();
        cy.get('.inventory_item_price').then(($prices) => {
            const priceValues = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
            const sortedPrices = [...priceValues].sort((a, b) => a - b);
            expect(priceValues).to.deep.equal(sortedPrices);
        });
    });

    it('should add a product to the cart', () => {
        ProductsPage.addItemToCart('Sauce Labs Backpack');
        cy.get('.shopping_cart_badge').should('contain', '1');
    });
});