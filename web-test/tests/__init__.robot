*** Settings ***
Documentation    This project is to demo Robot Framework - SeleniumLibrary
...            with Angular web app

Resource    ../resources/common.resource

Library    SeleniumLibrary

Suite Setup     Open Web App
Suite Teardown    Close Browser

Test Tags    System testing