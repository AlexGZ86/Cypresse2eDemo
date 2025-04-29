class ProductsPage {
    verifyProductPageLoaded() {
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
    }

    sortByPriceLowToHigh() {
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)');
    }

    addItemToCart(itemName) {
        cy.contains('.inventory_item', itemName)
            .find('button')
            .click();
    }

    openCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export default new ProductsPage();