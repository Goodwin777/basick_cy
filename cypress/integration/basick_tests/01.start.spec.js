//  const myUrl = Cypress.config().baseUrl
before(() => {
  cy.visit('/');
});

describe('My First Test', () => {
  it('Check the title of page', () => {

    cy.title().should('eq', 'Google')


  });

  it('get text of first element', () => {
    const eventNames = []


    cy.get('.gb_g').eq(0)
      .each(($el) => {
         cy.wrap($el.text())
 


      });
    // cy.log(eventNames)
  });
});