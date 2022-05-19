Feature: Create University
  In order to use the app
  As a admin
  I want to create an university
  IMPORTANT: We need to create the following universities before execute the test:
    //Name, Acronym, City, Country//
    Universitat Lleida, ULL, Barcelona, Spain
    Universidad de Huelva, UHU, Huelva, Spain

  Scenario: Edit a university
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I click on card-text item "Universitat Lleida"
    When I click the "Edit" button
    And The form is filled with university name "Universitat Lleida", acronym "ULL", city "Barcelona" and country "Spain"
    And I clear and fill the form with
      | FIELD           | VALUE                 |
      | name            | Universitat de Lleida |
      | acronym         | UDL                   |
      | city            | Lleida                |
      | country         | Catalonia             |
    And I click the "Submit" button
    Then I see the data of the university with name "Universitat de Lleida", acronym "UDL", city "Lleida" and country "Catalonia"

  Scenario: Edit a university changing name to an existing name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I click on card-text item "Universitat de Lleida"
    When I click the "Edit" button
    And The form is filled with university name "Universitat de Lleida", acronym "UDL", city "Lleida" and country "Catalonia"
    And I clear and fill the form with
      | FIELD           | VALUE                 |
      | name            | Universidad de Huelva |
      | acronym         | UHU                   |
      | city            | Huelva                |
      | country         | Spain                 |
    And I click the "Submit" button
    Then I see error message "Unique index or primary key violation"

  Scenario: Edit university with empty name
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I click on card-text item "Universitat de Lleida"
    When I click the "Edit" button
    And The form is filled with university name "Universitat de Lleida", acronym "UDL", city "Lleida" and country "Catalonia"
    And I clear the "name" field
    Then The "Submit" button is disabled

  Scenario: Edit university with empty acronym
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I click on card-text item "Universitat de Lleida"
    When I click the "Edit" button
    And The form is filled with university name "Universitat de Lleida", acronym "UDL", city "Lleida" and country "Catalonia"
    And I clear the "acronym" field
    Then The "Submit" button is disabled

  Scenario: Edit university with empty city
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I click on card-text item "Universitat de Lleida"
    When I click the "Edit" button
    And The form is filled with university name "Universitat de Lleida", acronym "UDL", city "Lleida" and country "Catalonia"
    And I clear the "city" field
    Then The "Submit" button is disabled

  Scenario: Edit university with empty country
    Given I'm in the homepage
    And I log in as "admin" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I click on card-text item "Universitat de Lleida"
    When I click the "Edit" button
    And The form is filled with university name "Universitat de Lleida", acronym "UDL", city "Lleida" and country "Catalonia"
    And I clear the "country" field
    Then The "Submit" button is disabled

  Scenario: Edit university not authenticated
    Given I'm in the homepage
    And I'm not logged in
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    When I click on card-text item "Universitat de Lleida"
    Then The button "Edit" does not exists

  Scenario: Edit university authenticated as a student
    Given I'm in the homepage
    And I log in as "student" with password "password"
    And I click on nav item "Universities"
    And I click on dropdown item "List Universities"
    And I click on card-text item "Universitat de Lleida"
    Then The button "Edit" does not exists




