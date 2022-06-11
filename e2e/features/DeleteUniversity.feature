Feature: Create University
  In order to use the app
  As a User
  I want to delete universities

  Scenario: Delete university as Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I wait for the "Universidad de Barcelona" content to appear
    And I click on the "Universidad de Barcelona" link
    And I wait for the "Universidad de Barcelona" content to appear
    And I click the "Delete" button
    And I wait for the "Please, confirm deletion:" content to appear
    And I click the "Delete" button
    Then The university with name "Universidad de Barcelona" is not listed

  Scenario: Delete university as Student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I wait for the "Universidad Politecnica de Catalunya" content to appear
    And I click on the "Universidad Politecnica de Catalunya" link
    And I wait for the "Universidad Politecnica de Catalunya" content to appear
    And The button "Delete" does not exists


  Scenario: Delete university not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I wait for the "Universidad Politecnica de Catalunya" content to appear
    And I click on the "Universidad Politecnica de Catalunya" link
    And I wait for the "Universidad Politecnica de Catalunya" content to appear
    And The button "Delete" does not exists

