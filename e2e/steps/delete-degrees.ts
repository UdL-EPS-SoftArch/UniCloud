import {Then, And} from 'cypress-cucumber-preprocessor/steps';

Then('The degree with name {string} is not listed', (value) => {
  cy.get('a').contains(value).should('not.exist');
});

And('I wait for the {string} content to appear', (value) => {
  cy.contains(value).should('exist');
});
