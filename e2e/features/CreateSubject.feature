Feature: Create Subject
  In order to use the app
  As a User
  I want to create subjects

  Scenario: Create a new Subject as an Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And There is not a subject with name "Algebra2"
    And I click the "Create Subject" button
    And I fill the form with
      | FIELD    | VALUE         |
      | name     | Algebra2       |
      | course   | 1             |
      | optional | True          |
    And I click the "Submit" button
    Then I see the data of the subject with name "Algebra2", course "1" and optional "true"

  Scenario: Create a new Subject as Student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    Then The button "Create Subject" does not exists

    Scenario: Create a new Subject not authenticated
    Given I'm in the homepage
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    Then The button "Create Subject" does not exists

  Scenario: Create a new Subject with empty name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I click the "Create Subject" button
    And I fill the form with
      | FIELD    | VALUE         |
      | course   | 1             |
      | optional | True          |
    Then The "Submit" button is disabled

  Scenario: Create a new Subject with empty course
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I click the "Create Subject" button
    And I fill the form with
      | FIELD    | VALUE         |
      | name     | Algebra       |
      | optional | True          |
    Then The "Submit" button is disabled

  Scenario: Create a new Subject with empty optional
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I click the "Create Subject" button
    And I fill the form with
      | FIELD    | VALUE         |
      | name     | Algebra       |
      | course   | 1             |
    Then The "Submit" button is disabled
