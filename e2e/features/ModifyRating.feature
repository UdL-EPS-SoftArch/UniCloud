Feature: Modify Rating


  IMPORTANT: We need to create at least one Rating to do the test
  Comment: el magic
  Rating: 2
  Author: Marc


  Scenario: Modify Rating as Admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Rating"
    And I click on dropdown item "List Ratings"
    And I click on card-text item "el magic"
    Then The button "Edit" does not exist

  Scenario: Modify Rating as Student made by himself
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Rating"
    And I click on dropdown item "List Ratings"
    And I click on card-text item "el magic"
    And I click the "Edit" button
    And I clear and fill the form with
      | FIELD           | VALUE                 |
      | ratingvalue            | 2 |
      | comment         | Not Worth it              |
    And I click the "Update" button
    Then The first rating is updated

  Scenario: Modify Rating as Student made by another student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Rating"
    And I click on dropdown item "List Ratings"
    And I click on the first rating
    And I wait for the detail page to load
    Then The button "Edit" is blocked

  Scenario: Modify Rating when not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Rating"
    And I click on dropdown item "List Ratings"
    And I click on the first rating
    And I wait for the detail page to load
    Then The "Edit" button is blocked
