export function clickLMenuBtn() {
    cy.getDataTestSelector('react-burger-menu-btn').click();
}

export function addFirstItemToCart() {
    cy.getDataTestSelector('add-to-cart-sauce-labs-backpack').should('have.length', 1);
    cy.getDataTestSelector('item-4-title-link').should('exist').click();
    cy.contains('Sauce Labs Backpack');
    cy.getDataTestSelector('add-to-cart').should('exist').click();

}

export function FilterBySelectHighToLow() {
    cy.getDataTestSelector('product-sort-container').select('az');
    cy.getDataTestSelector('product-sort-container').should('have.value', 'az').and('exist');

}

export function FilterByNameAscending() {
    cy.getDataTestSelector('product-sort-container').select('hilo');
    cy.getDataTestSelector('product-sort-container').should('have.value', 'hilo').and('exist')

}
