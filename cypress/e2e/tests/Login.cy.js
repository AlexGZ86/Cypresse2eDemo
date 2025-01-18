import {clickLoginBtn, invalidLogin, login} from "../../pages/LandingPage";

describe('Login Page', () => {
    // before block to run once before any test cases
    before(() => {
        // Perform any setup tasks before any test cases
        // This can include starting the application server or preparing test data
    });

    // beforeEach block to run before each test case
    beforeEach(() => {
        // Visit the login page
        cy.visit('/')
    });

    // Test case to verify successful login
    it('should allow user to log in with valid credentials', () => {
        // Enter username and password on the landing page
        login();

        // Click the login button
        clickLoginBtn();

        // Assertion to verify successful login
        cy.url().should('include', '/inventory.html');
        cy.contains('Swag Labs').should('be.visible');
    });

    // Test case to verify error message with invalid credentials
    it('should display error message with invalid credentials', () => {
        // Enter invalid username and password
        invalidLogin();

        // Click the login button
        clickLoginBtn()
        // Assertion to verify error message
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
    });
    // afterEach block to run after each test case
    afterEach(() => {
        // Clear any logged-in state or cookies
        // This ensures a clean state before each test case
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    // after block to run after all test cases
    after(() => {
        // Perform any cleanup tasks after all test cases
        // This can be useful for resetting the application or cleaning up resources
    });
});