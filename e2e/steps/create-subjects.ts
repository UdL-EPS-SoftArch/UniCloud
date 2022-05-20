import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from '@cucumber/cucumber';

Given(/^ I go to subject creation page$/, () => {
  cy.visit('http://localhost:4200/subjects/');
});

When(/^ Fill the subject creation form with$/, (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur());
});

Then(/^ It takes me to the subject created page$/, () => {
  assert(cy.url().should('include', 'subjects/'));
});

Then(/^ The subject created page information matches$/, (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
  cy.get('#' + pair[0] + '-repr').invoke('text').should('contains', pair[1]));
});

