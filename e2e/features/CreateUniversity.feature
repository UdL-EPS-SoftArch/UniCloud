Feature: Create University
  In order to use the app
  As a Admin
  I want to create universities to see

  Scenario: Create new valid University as Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I click the "Create University" button
    And I fill the form with
      | FIELD    | VALUE         |
      | name     | ExampleName   |
      | acronym  | EN            |
      | city     | Lleida        |
      | country  | Spain         |
    And I click the "Submit" button
    Then I see the data of the university with name "ExampleName", acronym "EN", city "Lleida" and country "Spain"

  Scenario: Create a new University as Student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    Then The button "Create University" does not exists

  Scenario: Create a new University with an already existing name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I click the "Create University" button
    And I fill the form with
      | FIELD    | VALUE         |
      | name     | ExampleName   |
      | acronym  | EN            |
      | city     | Lleida        |
      | country  | Spain         |
    And I click the "Submit" button
    Then I see error message "Unique index or primary key violation"

