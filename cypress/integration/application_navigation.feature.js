/* eslint-disable no-undef */
describe('Visiting application', () => {
  
  beforeEach(() => {
    cy.intercept("GET", "**/api/products", {
      fixture: "product_index_response.json",
    }).as("productIndex");
    cy.visit('/')
  })

  it('is expected to display the header', () => {
    cy.get('[data-cy=header]').should('contain', 'Slowfood')
  })

});