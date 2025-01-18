export function clickLMenuBtn() {
    cy.getIdSelector('react-burger-menu-btn').click();
}


export function addFirstItemToCart() {
    cy.getIdSelector('add-to-cart-sauce-labs-backpack').should('have.length', 1);
    cy.getIdSelector('item_4_title_link').should('exist').click();
    cy.contains('Sauce Labs Backpack');
    cy.getIdSelector('add-to-cart').should('exist').click();
}
