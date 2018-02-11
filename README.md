# Spam Reports Client project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.
## Description

Angular5 client for [Spam Reports API](https://github.com/gabriel-montagne/spam_reports_API)
used to update the state of the spamReportItem:
````$xslt
{
  "id": "01322891-c5cb-4ac5-90d4-3c4224f40ba2",
  "source": "REPORT",
  "sourceIdentityId": "d0ba4c4a-39da-4d2c-8934-80652da104fe",
  "reference": {
      "referenceId": "130debb9-cb13-49eb-881e-86fd3244639c",
      "referenceType": "REPORT"
  },
  "state": "OPEN",
  "payload": {
      "source": "REPORT",
      "reportType": "SPAM",
      "message": null,
      "reportId": "130debb9-cb13-49eb-881e-86fd3244639c",
      "referenceResourceId": "ba6f65d6-1a83-42bc-8839-ea2639faeb69",
      "referenceResourceType": "ARTICLE"
  },
  "created": "2017-10-30T14:34:06.569Z"
}
````

## Prerequisites
- Angular5
- Angular CLI
- git
- yarn

## Install instructions

- install the [Spam Reports API](https://github.com/gabriel-montagne/spam_reports_API) 
project following the instructions from README file
- go to your workspace folder and clone the repository and navigate to the new createds folder:
````
> git clone git@github.com:gabriel-montagne/spam-reports-client.git (or http ...)
> cd spam-reports-client
````
- instal dependencies
````
> yarn install
````
- run the server:
````
> ng serve
````
- open chrome browser add [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) extension
and enable CORS (don't forget to disable it when you need to access other sites)
- navigate to localhost:4200

