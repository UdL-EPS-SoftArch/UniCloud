import {Then, And} from 'cypress-cucumber-preprocessor/steps';

Then('The first rating is not listed', (value) => {
  cy.get('a').contains(value).should('not.exist');
});

Then('The {String} button is blocked', (value) => {
  cy.contains(value).should('be.disabled');
});
