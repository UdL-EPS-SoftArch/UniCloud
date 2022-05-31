Feature: Edit Degree
  In order to use the app
  As a admin
  I want to edit a Degree

  Scenario: Edit a Degree
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Disseny"
    When I click the "Edit" button
    And The form is filled with degree name "Disseny" and faculty "EP"
    And I clear and fill the form with
      | FIELD      | VALUE                 |
      | name       | Disseny Grafic        |
      | faculty    | EPS                   |
    And I select the university "Universidad Politecnica de Catalunya"
    And I click the "Submit" button
    Then I see the data of the degree with name "Disseny Grafic", faculty "EPS" and university "Universidad Politecnica de Catalunya"

  Scenario: Edit degree with empty name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Disseny Grafic"
    When I click the "Edit" button
    And The form is filled with degree name "Disseny Grafic" and faculty "EPS"
    And I clear the "name" field
    Then The "Submit" button is disabled

  Scenario: Edit degree with empty faculty
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Disseny Grafic"
    When I click the "Edit" button
    And The form is filled with degree name "Disseny Grafic" and faculty "EPS"
    And I clear the "faculty" field
    Then The "Submit" button is disabled

  Scenario: Edit degree with empty university
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Disseny Grafic"
    When I click the "Edit" button
    And The form is filled with degree name "Disseny Grafic" and faculty "EPS"
    Then The "Submit" button is disabled

  Scenario: Edit university not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    When I click on card-text item "Disseny Grafic"
    Then The button "Edit" does not exists

  Scenario: Edit degree authenticated as a student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Disseny Grafic"
    Then The button "Edit" does not exists
