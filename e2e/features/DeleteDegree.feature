Feature: Delete Degree
  In order to use the app
  As a User
  I want to delete degree

  Scenario: Delete degree as Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I wait for the "Medicina" content to appear
    And I click on the "Medicina" link
    And I wait for the "Medicina" content to appear
    And I click the "Delete" button
    And I wait for the "Please, confirm deletion:" content to appear
    And I click the "Delete" button
    Then The degree with name "Medicina" is not listed

  Scenario: Delete Degree as Student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I wait for the "INEFC" content to appear
    And I click on the "INEFC" link
    And I wait for the "INEFC" content to appear
    And The button "Delete" does not exists

  Scenario: Delete degree not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Degrees"
    And I click on dropdown item "List Degrees"
    And I wait for the "Dret" content to appear
    And I click on the "Dret" link
    And I wait for the "Dret" content to appear
    And The button "Delete" does not exists
