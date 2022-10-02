Feature: Practice Automation 

    # Scenario: Login with Valid Credentilas
    #     Given visit Ecomm site
    #     When I enter username
    #         | username |
    #         | student  |
    #     And I enter password
    #         | password    |
    #         | Password123 |
    #     And click on login button
    #     Then Validate Dashboard
    Scenario Outline: practice automation site ragistration
        Given visit practice automation registration site
        When users Login with '<Email>' & '<password>'
        And Click on registor button
        Then dashboard should be visible
    Example:
            | Email            |  | password     |
            | sachin@gmail.com |  | SachinDatir@ |
            | SACHIN@GMAIL.COM |  | SkdDatir@    |


    # Scenario Outline: login with multiple users
    #     Given visit practice autumation testing site
    #     When User login with '<Email>' and '<password>'
    #     And click on the login button
    #     Then dashboard is visible

    #     Examples:
    #         | Email             |  | password     |
    #         | dwdwd@gmail.com   |  | SkdDatir@13  |
    #         | Skd@123.gmail.com |  | Sachin@12345 |