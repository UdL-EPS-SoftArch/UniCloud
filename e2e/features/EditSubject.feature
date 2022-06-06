Feature: Edit Subject
  In order to use the app
  As an admin
  I want to edit a subject

  Scenario: Edit a subject
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I click on card-text item "Algebra"
    When I click the "Edit" button
    And The form is filled with subject name "Algebra", course "1" and optional "true"
    And I clear and fill the form with
      | FIELD           | VALUE                 |
      | name            | Algebra               |
      | course          | 1                     |
      | optional        | True                  |
    And I click the "Submit" button
    Then I see the data of the subject with name "Algebra", course "1" and optional "true"

  Scenario: Edit subject with empty name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I click on card-text item "Algebra"
    When I click the "Edit" button
    And The form is filled with subject name "Algebra", course "1" and optional "true"
    And I clear the "name" field
    Then The "Submit" button is disabled

  Scenario: Edit subject with empty course
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I click on card-text item "Algebra"
    When I click the "Edit" button
    And The form is filled with subject name "Algebra", course "1" and optional "true"
    And I clear the "course" field
    Then The "Submit" button is disabled

  Scenario: Edit subject with empty optional
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I click on card-text item "Algebra"
    When I click the "Edit" button
    And The form is filled with subject name "Algebra", course "1" and optional "true"
    And I clear the "optional" field
    Then The "Submit" button is disabled

  Scenario: Edit subject not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    When I click on card-text item "Algebra"
    Then The button "Edit" does not exists

  Scenario: Edit subject authenticated as a student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I click on card-text item "Algebra"
    Then The button "Edit" does not exists





