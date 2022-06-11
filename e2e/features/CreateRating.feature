Feature: Add a rating to a resource

  Scenario: Add rating when not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Rating"
    And I click on dropdown item "List Ratings"
    Then The button "Create Rating" does not exist


  Scenario: Add rating as student when already authenticated
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Rating"
    And I click on dropdown item "List Ratings"
    And I click the "Create Rating" button
    And I fill the form with
      | FIELD    | VALUE         |
      | ratingvalue     | 2.5   |
      | comment  | Professional Job  |
    And I click the "Submit" button
    Then I get redirected to the "List Ratings" page


  Scenario: Add rating as admin
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Rating"
    And I click on dropdown item "List Ratings"
    Then The button "Create Rating" does not exist


  Scenario: Add a negative rating as student when already authenticated
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Rating"
    And I click on dropdown item "List Ratings"
    And I click the "Create Rating" button
    And I fill the form with
      | FIELD    | VALUE         |
      | ratingvalue     | -2  |
      | comment  | Professional Job  |
    Then The button "Submit" gets blocked
