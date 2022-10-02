Feature: Reqres Api

    Scenario:Get users list
        Given User sent the request to get user list
        Then Users list should be display

    Scenario Outline: create new users
        Given User sent the request to create new user with "<name>" and job "<job>"
        Then User should be created with "<name>" and job "<job>"

        Examples:
            | name   | job               |
            | sachin | Software Engineer |
            | pankaj | QA                |
            | sanket | System Engineer   |

    Scenario Outline: update the user
        And User sent the request to update user with "<name>" and job "<job>"
        Then User should be update with "<name>" and job "<job>"

        Examples:
            | name        | job               |
            | rahul       | Software Engineer |
            | pankajMore  | System Engineer   |
            | SanketDatir | QA                |


   Scenario Outline: Delete Users
   When User sent the request to Delete with "<name>" and job "<job>"
   Then User should be Delete with "<name>" and job "<job>" 
       Examples:
            | name        | job               |
            | rahul       | Software Engineer |
            | pankajMore  | System Engineer   |
            | SanketDatir | QA                |