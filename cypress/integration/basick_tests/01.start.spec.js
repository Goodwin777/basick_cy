//  const myUrl = Cypress.config().baseUrl
before(() => {
  cy.visit('/');
});

describe('My First Test', () => {
  it('Check the title of page', () => {

    cy.title().should('eq', 'Googlee')


  });

  it('get text of first element', () => {
    cy.get('.gb_g').eq(0)
      .each(($el) => {
        cy.wrap($el.text())
      });
  });
});