Feature: Create Degree
  In order to use the app
  As a User
  I want to create degrees

  Scenario: Create new valid Degree as Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click the "Create Degree" button
    And I fill the form with
      | FIELD     | VALUE                              |
      | name      | Medicina                           |
      | faculty   | Facultat de Medicina i Odontologia |
      | univesity | Universitat de Valencia            |
    And I click the "Submit" button
    Then I see the data of the degree with name "Medicina", faculty "Facultat de Medicina i Odontologia" and university "Universitat de Valencia"

  Scenario: Create a new Degree as Student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Degree"
    And I click on dropdown item "List Degrees"
    Then The button "Create Degrees" does not exists

  Scenario: Create a new Degree not authenticated
    Given I'm in the homepage
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    Then The button "Create Degree" does not exists

  Scenario: Create a new Degree with an already existing name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click the "Create Degree" button
    And I fill the form with
      | FIELD     | VALUE                              |
      | name      | Medicina                           |
      | faculty   | Facultat de Medicina i Odontologia |
      | univesity | Universitat de Valencia            |
    And I click the "Submit" button
    Then I see error message "Unique index or primary key violation"

  Scenario: Create a new Degree with empty name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click the "Create Degree" button
    And I fill the form with
      | FIELD          | VALUE                 |
      | faculty        | EPS                   |
      | university     | Universitat de Lleida |
    Then The "Submit" button is disabled

  Scenario: Create a new Degre with empty faculty
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click the "Create Degree" button
    And I fill the form with
      | FIELD      | VALUE                   |
      | name       | Medicina                |
      | university | Universitat de Valencia |
    Then The "Submit" button is disabled

  Scenario: Create a new Degree with empty university
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I click the "Create Degree" button
    And I fill the form with
      | FIELD    | VALUE                   |
      | name     | Medicina                |
      | faculty  | Universitat de Valencia |
    Then The "Submit" button is disabled
