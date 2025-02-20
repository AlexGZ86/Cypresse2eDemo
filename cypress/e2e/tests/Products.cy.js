import {addFirstItemToCart, FilterByNameAscending, FilterBySelectHighToLow} from "../../pages/ProductsPage";
import {clickLoginBtn, login} from "../../pages/LandingPage";

describe('Products main page Actions to add ,filter, and remove items', () => {
    before(() => {
        // Perform any setup tasks before any test cases
        // This can include starting the application server or preparing test data

    });

    beforeEach(() => {

        cy.login();
        // cy.visit('/')
        //
        // login();
        //
        // // Click the login button
        // clickLoginBtn();

        // Assertion to verify successful login
        cy.url().should('include', '/inventory.html');

    });

    it('should allow user select first Item from Products List', () => {
        // Enter username and password on the landing page
        // Assertion to verify successful login

//        cy.url().should('include', '/inventory.html');
        cy.contains('Swag Labs').should('be.visible');
        addFirstItemToCart()

        //Assert new page url and element selected are displayed
        cy.url().should('include', '/inventory-item.html?id=4');
        cy.contains('Swag Labs').should('be.visible');
        //Assert button was updated
        cy.get(`button[id=remove]`).should('exist').and('exist')
        //assert cart was updated with item
        cy.getDataTestSelector('shopping-cart-badge').should('exist').and('have.text', "1");

    });
    it('should allow user Filter by Price high to low and Add  First Item to cart', () => {

        FilterByNameAscending();
        cy.contains('Name (A to Z)').should('exist');
        cy.getDataTestSelector('active-option').should('have.text', 'Price (high to low)');
    })

    it('should allow user Filter by Ascending name  Select First Item to cart', () => {
        FilterBySelectHighToLow();
        cy.contains('Price (high to low)').should('exist');
        cy.getDataTestSelector('active-option').should('have.text', 'Name (A to Z)');


    })
});