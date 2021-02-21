Feature: End to end Ecommerce validation


    application Regression
    @Regression
    Scenario: Ecommerce products delivery
        Given I open Ecommerce Page
        When I add items to cart
        And Validate the total prices
        Then Select the country submit and verify Thankyou
    @Smoke
    Scenario: Filling the form to shop
        Given I open Ecommerce Page
        When I fill the form details
            | name   | gender |
            | sslona | Male   |
        And Validate the forms bahaviour
        Then Select the Shop Page
