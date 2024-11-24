*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    http://localhost:4200
${BROWSER}    chrome

*** Keywords ***
Open Web App
    Open Browser    ${URL}    ${BROWSER}