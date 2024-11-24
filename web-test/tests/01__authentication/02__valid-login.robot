*** Settings ***
Name    User login
Resource    ../../resources/login-resource.resource
Resource    ../../resources/01__authentication/02__valid-login.resource

*** Test Cases ***
Correct User Login
    [Documentation]    Testing for correct username and password
    Type In Email    ${CORRECT_USER}[email]
    Type In Password    ${CORRECT_USER}[password]
    Submit Credentials
    Hello Page Should Welcome    ${USER_NAME}