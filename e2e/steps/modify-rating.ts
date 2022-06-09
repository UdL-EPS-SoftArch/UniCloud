import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I\'m in the University detail page', () => {
  cy.visit('http://localhost:4200/universities/1');
});

Given('I click on card-text item {string}', (value) => {
  cy.get('.card-text').contains(value).click();
});

When('The form is filled with university name {string}, acronym {string}, city {string} and country {string}',
  (uniName, uniAcronym, uniCity, uniCountry) => {
    cy.get('#name').should('have.value', uniName);
    cy.get('#acronym').should('have.value', uniAcronym);
    cy.get('#city').should('have.value', uniCity);
    cy.get('#country').should('have.value', uniCountry);
  });

When('I clear and fill the form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().type(pair[1]).blur() );
});

When('I clear the {string} field', (value) => {
  cy.get('#' + value).clear();
});
