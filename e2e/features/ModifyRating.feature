Feature: Modify Rating

  Scenario: Modify Rating as Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I click on the first rating
    And I wait for the detail page to load
    Then The "Edit" button does not exist

  Scenario: Modify Rating as Student made by himself
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I click on the first rating
    And I wait for the detail page to load
    And I click the "Edit" button
    And I wait for the "Please, confirm deletion:" content to appear
    And I change the description to "Not worth it"
    Then The first rating is updated

  Scenario: Modify Rating as Student made by another student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I click on the first rating
    And I wait for the detail page to load
    Then The "Edit" button is blocked

  Scenario: Modify Rating when not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I click on the first rating
    And I wait for the detail page to load
    Then The "Edit" button is blocked
