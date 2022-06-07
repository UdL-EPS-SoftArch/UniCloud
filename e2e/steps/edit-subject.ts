import {Given, When} from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from '@cucumber/cucumber';

Given('I\'m in the Subject detail page', () => {
  cy.visit('http://localhost:4200/subjects/1');
});

Given('I click on card-text item {string}', (value) => {
  cy.get('.card-text').contains(value).click();
});

When('The form is filled with subject name {string}, course {string} and optional {string}',
  (subjectName, subjectCourse, subjectOptional) => {
  cy.get('#name').should('have.value', subjectName);
  cy.get('#course').should('have.value', subjectCourse);
  cy.get('#optional').should('have.value', subjectOptional);
});

When('I clear and fill the form', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).clear().type(pair[1]).blur());
});

When('I clear the {string} field', (value) => {
  cy.get('#' + value).clear();
});


