Feature: Create Subject
  In order to use the app
  As an admin
  I want to create subjects to see

  Scenario: Create a Subject as an Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I click on the "Create Subjects" button
    And I fill the form with
      | FIELD    | VALUE         |
      | name     | ExampleName   |
      | course   | 3             |
      | optional | Mandatory     |
    And I click the "Submit" button
    Then I see the data of the subject with name "ExampleName", course 3 and optional "Mandatory"
