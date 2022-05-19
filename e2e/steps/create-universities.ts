import {Given, Then} from 'cypress-cucumber-preprocessor/steps';


Given('I click on nav item {string}', (value) => {
  cy.get('.nav-link').contains(value).click();
});

Given('I click on dropdown item {string}', (value) => {
  cy.get('.dropdown-item').contains(value).click();
});

Then('I see the data of the university with name {string}, acronym {string}, city {string} and country {string}',
  (uniName, uniAcronym, uniCity, uniCountry) => {
  cy.get('#universityName').contains(uniName).should('exist');
  cy.get('#universityAcronym').contains(uniAcronym).should('exist');
  cy.get('#universityCity').contains(uniCity).should('exist');
  cy.get('#universityCountry').contains(uniCountry).should('exist');
});

Then('The button {string} does not exists', (value) => {
  cy.get('button').contains(value).should('not.exist');
});
