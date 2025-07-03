describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('/')

    cy.contains('ivysaur').click() // find a visible element with the text "Ivysaur" and click it

    cy.url().should('include', '/pokemon/ivysaur')

    cy.contains('chlorophyll')
  })
})
