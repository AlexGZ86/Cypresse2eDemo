import {clickLoginBtn, login} from "../../pages/LandingPage";
import {addFirstItemToCart} from "../../pages/ProductsPage";

it('should allow user select first Item from Products List', () => {
    // Enter username and password on the landing page
    // Assertion to verify successful login
    cy.url().should('include', '/inventory.html');
    cy.contains('Swag Labs').should('be.visible');

    addFirstItemToCart()

    //Assert new page url and element selected are displayed
    cy.url().should('include', '/inventory-item.html?id=4');
    cy.contains('Swag Labs').should('be.visible');
//Assert button was updated
    cy.get(button[`id=remove`]).should('exist').and('be.visible')
//assert cart was updated with item
    cy.getDataTestSelector('shopping-cart-badge').should('exist').and('have.text', "1");

});

