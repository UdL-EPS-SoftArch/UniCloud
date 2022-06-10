import {Then, And} from 'cypress-cucumber-preprocessor/steps';

Then('The rating with comment {string} is not listed', (value) => {
  cy.get('a').contains(value).should('not.exist');
});

Then('The {string} button is blocked', (value) => {
  cy.contains(value).should('be.disabled');
});
