import {Given, Then} from 'cypress-cucumber-preprocessor/steps';


Given('I click on nav item {string}', (value) => {
  cy.get('.nav-link').contains(value).click();
});

Given('I click on dropdown item {string}', (value) => {
  cy.get('.dropdown-item').contains(value).click();
});

Then('I see the data of the degree with name {string}, faculty {string} and university {string}',
  (degreeName, degreeFaculty, degreeUni) => {
    cy.get('#degreeName').contains(degreeName).should('exist');
    cy.get('#degreeFaculty').contains(degreeFaculty).should('exist');
    cy.get('#degreeUniversity').contains(degreeUni).should('exist');
  });

Then('The button {string} does not exists', (value) => {
  cy.get('button').contains(value).should('not.exist');
});
