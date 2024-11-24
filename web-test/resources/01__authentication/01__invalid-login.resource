*** Settings ***
Resource    ../common.resource
Resource    ../login-resource.resource
*** Variables ***
&{INVALID_EMAIL}    email=junko    password=gsc
&{INVALID_PASSWORD}    email=junko.gsc@gehenna.edu.jp    password=g
&{WRONG_USER}    email=sorasaki.hina@gehenna.edu.jp    password=h!naPreFec1
&{CORRENT_USER}    email=junko.gsc@gehenna.edu.jp    password=gsc
${EMPTY_EMAIL_TEXT}    Email must be filled
${INVALID_EMAIL_TEXT}    Email must be filled
${EMPTY_PASSWORD_TEXT}    Password must be filled

*** Keywords ***
Submit With Empty Email Field
    [Arguments]    &{account}
    Type In Password    ${account}[password]

Submit With Empty Password Field
    [Arguments]    &{account}
    Type In Email    ${account}[email]

Empty Email Text Should Be Shown
    Page Should Contain Element    xpath=//p[@id="emptyEmailText"]

Empty Password Text Should Be Shown
    Page Should Contain Element    xpath=//p[@id="emptyPasswordText"]

Invalid Email Text Should Be Shown
    Page Should Contain Element    xpath=//p[@id="invalidEmailText"]

Incorrect Login Status Should Be Shown
    Wait Until Page Contains    Email or password is incorrect    3s