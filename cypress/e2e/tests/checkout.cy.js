import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";
import CartsPage from "../../pages/CartsPage";

describe("Checkout Flow Tests", () => {
  beforeEach(() => {
    LoginPage.login();
    ProductsPage.verifyProductPageLoaded();
  });

  it("should complete a full checkout successfully", () => {
    ProductsPage.addItemToCart("Sauce Labs Backpack");
    ProductsPage.openCart();
    CartsPage.verifyItemInCart("Sauce Labs Backpack");

    // Start checkout
    cy.get('[data-test="checkout"]').click();
    cy.url().should("include", "/checkout-step-one.html");

    // Fill checkout info
    cy.get('[data-test="firstName"]').type("John");
    cy.get('[data-test="lastName"]').type("Doe");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();

    // Verify item on overview page
    cy.url().should("include", "/checkout-step-two.html");
    cy.get(".cart_item").should("contain.text", "Sauce Labs Backpack");

    // Finish checkout
    cy.get('[data-test="finish"]').click();

    // Verify confirmation page
    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header").should(
      "contain.text",
      "Thank you for your order!",
    );
    it("adds a backpack to cart, completes checkout, and verifies totals & confirmation", () => {
      // add to cart
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

      // verify cart badge and open cart
      cy.get(".shopping_cart_badge").should("contain", "1");
      cy.get(".shopping_cart_link").click();

      // assert cart page
      cy.url().should("include", "/cart.html");
      cy.get(".cart_item").should("have.length", 1);

      // begin checkout
      cy.get('[data-test="checkout"]').click();
      cy.url().should("include", "/checkout-step-one.html");

      // fill info
      cy.get('[data-test="firstName"]').type("Alice");
      cy.get('[data-test="lastName"]').type("Smith");
      cy.get('[data-test="postalCode"]').type("90210");
      cy.get('[data-test="continue"]').click();

      // review totals
      cy.url().should("include", "/checkout-step-two.html");
      cy.get(".summary_subtotal_label").should("contain", "Item total: $29.99");
      cy.get(".summary_tax_label").should("contain", "Tax: $2.40");
      cy.get(".summary_total_label").should("contain", "Total: $32.39");

      // finish and confirm
      cy.get('[data-test="finish"]').click();
      cy.url().should("include", "/checkout-complete.html");
      cy.get(".complete-header").should("contain", "Thank you for your order!");
    });
  });
});
