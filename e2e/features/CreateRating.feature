Feature: Add a rating to a resource

  Background:
    Given There is a created Resource with name "gei" by student "Marc"

  Scenario: Add rating when not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    Then The button "Create Rating" does not exist


  Scenario: Add rating as student when already authenticated
    Given I'm in the homepage
    And I login as "student" with password "password"
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I click "Create Rating" button
    And I fill the Rating score with "2.5" and write a description with "Professional job"
    And I click the "Submit" button
    Then I get redirected to the "List Rating" page


  Scenario: Add rating as admin
    Given I'm in the homepage
    And I login as "admin" with password "password"
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    Then The button "Create Rating" does not exist


  Scenario: Add a negative rating as student when already authenticated
    Given I'm in the homepage
    And I login as "student" with password "password"
    And I click on nav item "Ratings"
    And I click on dropdown item "List Rating"
    And I fill the Rating score with "-2" and write a description with "Bad job"
    Then The button "Submit" gets blocked
