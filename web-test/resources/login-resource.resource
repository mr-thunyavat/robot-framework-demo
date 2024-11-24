*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    http://localhost:4200
${BROWSER}    chrome

*** Keywords ***
Open Browser To Login Page
    Open Browser    ${URL}/login    ${BROWSER}

Type In Email
    [Arguments]    ${email}
    Input Text    id=email    ${email}

Type In Password 
    [Arguments]    ${password}
    Input Password    id=password    ${password}

Submit Credentials
    Click Button    Login
