Feature: Edit User
  In order to use the app
  As a user
  I want to edit my profile

  Scenario: Edit user email
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "admin"
    And I click the "Edit" button
    And The form is filled with email name "adminDemo@sample.app"
    When I clear and fill the form with
      | FIELD        | VALUE                   |
      | email        | newadminDemo@sample.app  |
    And I click the "Submit" button
    Then I'm redirected to path "/admins/admin"
    And I see the admin page with email "newadminDemo@sample.app"

  Scenario: Edit user with empty email
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "admin"
    And I click the "Edit" button
    And The form is filled with email name "newadminDemo@sample.app"
    And I clear the "email" field
    Then The "Submit" button is disabled

  Scenario: Edit user with valid email and empty password
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "admin"
    When I click the "Edit" button
    And The form is filled with email name "newadminDemo@sample.app"
    And I click the "isPasswordReset" checkbox
    And I clear the "password" field
    Then The "Submit" button is disabled
