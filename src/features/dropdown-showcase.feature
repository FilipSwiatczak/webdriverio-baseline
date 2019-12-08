Feature: Dropdown showcase
  How to use methods existing in the Dropdown class
  
  Background: open automation practice
    Given I open automation practice
    And I click on T-shirts
    
    Scenario: Selecting by visible text
      When I select "In stock" from sort by using selectText
      Then loader spinner is visible

    Scenario: Selecting by attribute value
      When I select "name:asc" from sort by using value attribute
      Then loader spinner is visible

    Scenario: Selecting by using option index
      When I select "3" option from sort by using selectIndex
      Then loader spinner is visible