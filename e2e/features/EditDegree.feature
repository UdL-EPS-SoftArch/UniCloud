Feature: Edit Degree
  In order to use the app
  As a admin
  I want to edit a Degree
  IMPORTANT: We need to create the following degrees before execute the test:
  //Name, Faculty, University//
  Medicina, Facultat de Medicina, Universitat de Lleida
  Dret, Facultat de Dret, Universitat de Huelva

  Scenario: Edit a Degree
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Medicina"
    When I click the "Edit" button
    And The form is filled with degree name "Medicina", faculty "Facultat de Medicina" and university "Universitat de Lleida"
    And I clear and fill the form with
      | FIELD      | VALUE                 |
      | name       | Medicina              |
      | faculty    | Facultat de Medicina  |
      | university | Universitat de Lleida |
    And I click the "Submit" button
    Then I see the data of the degree with name "Medicina", faculty "Facultat de Medicina" and university "Universitat de Lleida"

  Scenario: Edit a degree changing name to an existing name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Medicina"
    When I click the "Edit" button
    And The form is filled with degree name "Medicina", faculty "Facultat de Medicina" and university "Universitat de Lleida"
    And I clear and fill the form with
      | FIELD      | VALUE                 |
      | name       | Dret                  |
      | faculty    | Facultat de Dret      |
      | university | Universitat de Huelva |
    And I click the "Submit" button
    Then I see error message "Unique index or primary key violation"

  Scenario: Edit degree with empty name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Medicina"
    When I click the "Edit" button
    And The form is filled with degree name "Medicina", faculty "Facultat de Medicina" and university "Universitat de Lleida"
    And I clear the "name" field
    Then The "Submit" button is disabled

  Scenario: Edit degree with empty faculty
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Medicina"
    When I click the "Edit" button
    And The form is filled with degree name "Medicina", faculty "Facultat de Medicina" and university "Universitat de Lleida"
    And I clear the "faculty" field
    Then The "Submit" button is disabled

  Scenario: Edit degree with empty university
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Medicina"
    When I click the "Edit" button
    And The form is filled with degree name "Medicina", faculty "Facultat de Medicina" and university "Universitat de Lleida"
    And I clear the "university" field
    Then The "Submit" button is disabled

  Scenario: Edit university not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    When I click on card-text item "Medicina"
    Then The button "Edit" does not exists

  Scenario: Edit degree authenticated as a student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click on card-text item "Medicina"
    Then The button "Edit" does not exists
