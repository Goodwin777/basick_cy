 const myUrl = Cypress.config().baseUrl
 before(() => {
   cy.visit(myUrl);
 });

 describe('My First Test', () => {
   it('Visits the Kitchen Sink', () => {
     cy.log('hello');
   })
 })