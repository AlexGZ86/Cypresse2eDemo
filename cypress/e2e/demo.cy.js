describe("Simple Test", () => {
  it("Visits Google and checks title", () => {
    cy.visit("https://google.com");
    cy.title().should("include", "Google");
  });
});
