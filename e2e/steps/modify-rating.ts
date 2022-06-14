import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from '@cucumber/cucumber';

Given('I\'m in the Ratings detail page', () => {
  cy.visit('http://localhost:4200/ratings/1');
});

Given('I click on card-text item {string}', (value) => {
  cy.get('.card-text').contains(value).click();
});

When('I clear the {string} field', (value) => {
  cy.get('#' + value).clear();
});

And('The updated item is filled with rating score {int} and comment {string}',
  (rating, comment) => {
    cy.contains(rating).should('exist');
    cy.contains(comment).should('exist');
  });

And('I click the {string} button', (button) => {
  cy.get('button').contains(button).click();
});

Then('The rating made by {string} is updated', (value) => {
  cy.contains(value).should('exist');
});
