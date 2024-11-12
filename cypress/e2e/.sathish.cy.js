describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.visit('https://www.google.com/');
    cy.visit('https://www.gmail.com/');
     cy.get(".sample222").click();
    cy.get(".sample111").click();
    
     cy.get(".sample2").click();
    cy.get(".sample").click();
    cy.get("sathish").click();
  })
})
