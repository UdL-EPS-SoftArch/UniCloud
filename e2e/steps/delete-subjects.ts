import {And, Then} from 'cypress-cucumber-preprocessor/steps';

Then('The subject with name {string} is not listed', (value) => {
  cy.get('a').contains(value).should('not.exist');
});

And('I wait for the {string} content to appear', (value) => {
  cy.contains(value).should('exist');
});
