/* eslint-disable no-undef */
describe('Visiting application', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to display the header', () => {
    cy.get('[data-cy=header]').should('contain', 'Slowfood')
  })

});