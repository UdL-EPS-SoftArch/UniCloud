import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I\'m in the University detail page', () => {
  cy.visit('http://localhost:4200/degrees/1');
});

Given('I click on card-text item {string}', (value) => {
  cy.get('.card-text').contains(value).click();
});

When('The form is filled with degrees name {string}, faculty {string} and university {string}',
  (name, faculty, uni) => {
    cy.get('#name').should('have.value', name);
    cy.get('#faculty').should('have.value', faculty);
    cy.get('#university').should('have.value', uni);
  });

When('I clear and fill the form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().type(pair[1]).blur() );
});

When('I clear the {string} field', (value) => {
  cy.get('#' + value).clear();
});
