Feature: Delete Subject
  In order to use the app
  As a user
  I want to delete subjects

  Scenario: Delete Subject as Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I wait for the "Algebra" content to appear
    And I click on the "Algebra" link
    And I wait for the "Algebra" content to appear
    And I click the "Delete" button
    And I wait for the "Please, confirm deletion:" content to appear
    And I click the "Delete" button
    Then The subject with name "Algebra" is not listed

  Scenario: Delete Subject as Student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I wait for the "Algebra" content to appear
    And I click on the "Algebra" link
    And I wait for the "Algebra" content to appear
    And The button "Delete" does not exists

  Scenario: Delete Subject not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Subjects"
    And I click on dropdown item "List Subjects"
    And I wait for the "Algebra" content to appear
    And I click on the "Algebra" link
    And I wait for the "Algebra" content to appear
    And The button "Delete" does not exists


