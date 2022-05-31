import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I\'m in the University detail page', () => {
  cy.visit('http://localhost:4200/degrees/1');
});

Given('I click on card-text item {string}', (value) => {
  cy.get('.card-text').contains(value).click();
  cy.wait(1000);
});

When('The form is filled with degree name {string} and faculty {string}',
  (name, faculty) => {
    cy.get('#name').should('have.value', name);
    cy.get('#faculty').should('have.value', faculty);
  });

When('I clear and fill the form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().type(pair[1]).blur() );
});

When('I clear the {string} field', (value) => {
  cy.get('#' + value).clear();
  cy.wait(1000);
});

And('I select the university {string}', (value) => {
  cy.get('select').select(1);
  cy.wait(1200);
});
