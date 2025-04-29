class CartsPage {
    verifyItemInCart(itemName) {
        cy.contains('.cart_item', itemName).should('be.visible');
    }

    removeItem(itemName) {
        cy.contains('.cart_item', itemName)
            .find('button')
            .click();
    }
}

export default new CartsPage();