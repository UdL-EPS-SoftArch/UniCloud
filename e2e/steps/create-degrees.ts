import {Given, Then, And} from 'cypress-cucumber-preprocessor/steps';


Given('I click on nav item {string}', (value) => {
  cy.get('.nav-link').contains(value).click();
});

Given('I click on dropdown item {string}', (value) => {
  cy.get('.dropdown-item').contains(value).click();
});

Then('I see the data of the degree with name {string}, faculty {string} and university {string}',
  (degName, degFaculty, degUni) => {
    // cy.get('#degreeName').contains(degName).should('exist');
    cy.get('#degreeFaculty').contains(degFaculty).should('exist');
    cy.get('#degreeUni').contains(degUni).should('exist');
  });

Then('The button {string} does not exists', (value) => {
  cy.get('button').contains(value).should('not.exist');
});

And('I select the university {string}', (value) => {
  cy.get('select').select(1);
  cy.wait(4200);
});

