/* eslint-disable no-undef */
describe("Visiting the application", () => {
  before(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "product_index_response.json",
    }).as("productIndex");

    cy.visit("/");
  });

  it('is expected to make a GET request to products endpoint', () => {
    cy.wait('@productIndex').its('request.method').should('eq', 'GET')
  });

  it("is expected to display a list of products", () => {
    cy.get("[data-cy=product-list]").children().should("have.length", 3);
  });
});
