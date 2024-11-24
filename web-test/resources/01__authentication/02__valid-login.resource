*** Settings ***
Resource    ../common.resource
Resource    ../login-resource.resource
*** Variables ***
&{CORRECT_USER}    email=junko.gsc@gehenna.edu.jp    password=gsc
${USER_NAME}    junko

*** Keywords ***
Hello Page Should Welcome
    [Arguments]    ${username}
    Wait Until Page Contains    Hello, ${username}    2s