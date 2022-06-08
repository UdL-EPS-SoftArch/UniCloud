Feature: Main Search
  In order to use the app
  As a User
  I want to be able to search any element


  Scenario: Search existent university by Name
    Given I'm in the homepage
    When I select the object type "universities"
    And I fill the "MainSearch" input with "Universidad Politecnica de Catalunya"
    And I click the "Submit" button
    Then In the list I see the data of the university with name "Universidad Politecnica de Catalunya", acronym "UPC", city "Barcelona" and country "Spain"

  Scenario: Search existent university by Acronym
    Given I'm in the homepage
    When I select the object type "universities"
    And I fill the "MainSearch" input with "UPC"
    And I click the "Submit" button
    Then In the list I see the data of the university with name "Universidad Politecnica de Catalunya", acronym "UPC", city "Barcelona" and country "Spain"

  Scenario: Search existent university by City
    Given I'm in the homepage
    When I select the object type "universities"
    And I fill the "MainSearch" input with "Barcelona"
    And I click the "Submit" button
    Then In the list I see the data of the university with name "Universidad Politecnica de Catalunya", acronym "UPC", city "Barcelona" and country "Spain"

  Scenario: Search existent university by Country
    Given I'm in the homepage
    When I select the object type "universities"
    And I fill the "MainSearch" input with "Spain"
    And I click the "Submit" button
    Then In the list I see the data of the university with name "Universidad Politecnica de Catalunya", acronym "UPC", city "Barcelona" and country "Spain"
    Then In the list I see the data of the university with name "Universidad de Huelva", acronym "UHU", city "Huelva" and country "Spain"

  Scenario: Search non existent university
    Given I'm in the homepage
    When I select the object type "universities"
    And I fill the "MainSearch" input with "Potatoes"
    And I click the "Submit" button
    Then There are no elements on the list
