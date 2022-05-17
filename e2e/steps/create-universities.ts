import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I click on nav item {string}', (value) => {
  cy.get('.nav-link').contains(value).click();
});

Given('I click on nav item {string}', (value) => {
  cy.get('.nav-link').contains(value).click();
});

Given('I click on dropdown item {string}', (value) => {
  cy.get('.dropdown-item').contains(value).click();
});

Given('I click on the {string} button', (value) => {
  cy.get('button').contains(value).click();
});

Given('I see the data of the university with name {string}, acronym {string}, city {string} and country {string}',
  (uniName, uniAcronym, uniCity, uniCountry) => {
  cy.get('#universityName').contains(uniName).should('exist');
  cy.get('#universityAcronym').contains(uniAcronym).should('exist');
  cy.get('#universityCity').contains(uniCity).should('exist');
  cy.get('#universityCountry').contains(uniCountry).should('exist');
});
