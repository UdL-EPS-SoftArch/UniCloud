Feature: Delete Rating

  Scenario: Delete Rating as Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I click on the first rating
    And I wait for the detail page to load
    And I click the "Delete" button
    And I wait for the "Please, confirm deletion:" content to appear
    Then The first rating is not listed

  Scenario: Delete Rating as Student made by himself
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I click on the first rating
    And I wait for the detail page to load
    And I click the "Delete" button
    And I wait for the "Please, confirm deletion:" content to appear
    Then The first rating is not listed

  Scenario: Delete Rating as Student made by another student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I click on the first rating
    And I wait for the detail page to load
    Then The "Delete" button is blocked

  Scenario: Delete Rating when not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I click on the first rating
    And I wait for the detail page to load
    Then The "Delete" button is blocked
