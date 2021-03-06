import {And, Given, Then} from 'cypress-cucumber-preprocessor/steps';


Given('I click on nav item {string}', (value) => {
  cy.get('.nav-link').contains(value).click();
});

Given('I click on dropdown item {string}', (value) => {
  cy.get('.dropdown-item').contains(value).click();
});


Then('The button {string} gets blocked', (value) => {
  cy.get('button').contains(value).should('be.disabled');
});

Then('The button {string} does not exist', (value) => {
  cy.get('button').contains(value).should('not.exist');
});

And('I get redirected to the {string} page', () => {
  cy.visit('http://localhost:4200/ratings');
});
