Feature: Add a rating to a resource


  Background:


  Background:
    Given There is a registered student with username "student" and password "password" and email "student@local.com"
    Given There is a registered admin with username "admin" and password "password" and email "admin@local.com"
    And There is a Subject with name "Maths",course 2 and optional "name"
    And There is a registered resource with name "name" by the user "student", with description "description", file "example.pdf", and resource type "NOTE" for the subject name "Maths"

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
    Given I login as "student" with password "password"
    When I register a new rating with rating -3 and comment "Aproved" referenced to resource with name "name"
    Then The response code is 400
    And A new rating has not been created
