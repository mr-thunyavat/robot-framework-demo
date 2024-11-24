*** Settings ***
Name    Enter manage file page
Resource    ../../resources/common.resource

*** Test Cases ***

Enter Manage File Page
    [Documentation]    Uploading a file
    Click Link    /file
    Page Should Contain    Your files
    Element Should Contain    tag:button    Add file