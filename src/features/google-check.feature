Feature: Google check

  Background: Open google
    Given I open google search

    Scenario: Search for webdriver IO
      When I enter "WebdriverIO" as search criteria
      And press search
      Then webdriver IO website is the first result