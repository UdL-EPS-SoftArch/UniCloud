import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I\'m in the Ratings detail page', () => {
  cy.visit('http://localhost:4200/ratings/1');
});

Given('I click on card-text item {string}', (value) => {
  cy.get('.card-text').contains(value).click();
});


When('I clear and fill the form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().type(pair[1]).blur() );
});

When('I clear the {string} field', (value) => {
  cy.get('#' + value).clear();
});
