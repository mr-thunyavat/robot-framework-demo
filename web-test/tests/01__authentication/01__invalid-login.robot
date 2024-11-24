*** Settings ***
Name    Failed Login 
Resource    ../../resources/login-resource.resource
Resource    ../../resources/01__authentication/01__invalid-login.resource

*** Test Cases ***
Not Enter Email And Password Fields
    Submit Credentials
    Empty Email Text Should Be Shown
    Empty Password Text Should Be Shown

Enter Only Email Field
    Submit With Empty Password Field    &{INVALID_EMAIL}
    Submit Credentials
    Empty Password Text Should Be Shown

Incorrect Email And Password
    [Documentation]    Testing for failed authentication using wrong username, password, and both
    Type In Email    ${WRONG_USER}[email]
    Type In Password    ${WRONG_USER}[password]
    Submit Credentials
    Submit Credentials
    Incorrect Login Status Should Be Shown

