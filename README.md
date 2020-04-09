# MatTableDataFilter

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Introduction
This package is developed to get complex table data index on angular material project.

## Getting started

This package is based on `Angular Material 8/9`.

`npm install -g @angular/cli`

`ng new my-app`

`ng add @angular/material`

`npm i mat-table-data-filter`

## Setup
Import in your app module ts.

    app.module.ts
    
    import {MatTableDataFilterModule} from 'mat-table-data-filter/src/lib/mat-table-data-filter.module';
    
    @NgModule({
        ...
        imports: [
            ...
            MatTableDataFilterModule
        ]
        ...
    })

Example

    On Component html file.
    
      <lib-mat-table-data-filter
        [TableColumn]="tableColumn"
        [SearchOption]="searchOption"
        (getResult)="getResult($event)">
      </lib-mat-table-data-filter>
  
    On Component Ts file.

        Parameter Example
    
            tableColumn = [
              { label: 'Company', definition: 'CompanyName', type: 'text', filter: 'true'},
              { label: 'Title', definition: 'TitleId', type: 'select', filter: 'true', endpoint: 'api/controller/action'},
              { label: 'Date Created', definition: 'CreatedOn', type: 'date', filter: 'true'},
              { label: 'Some Field', definition: 'SomeField', type: 'text', filter: 'false'},
              { label: 'Another Field', definition: 'AnotherField', type: 'bool', filter: 'true'},
              { label: 'Actions', definition: 'actions', type: 'bool', filter: 'true'}
            ];
    
            options = [
              {
                type: 'date',
                values: ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal'],
                data: ['eq', 'ne', 'lt', 'le', 'gt', 'ge']
              },
              {
                type: 'text',
                values: ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal',
                  'begins with', 'does not begin with', 'ends with', 'does not end with', 'contains', 'does not contain',
                  'is null', 'is not null'],
                data: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'bw', 'bn', 'ew', 'en', 'cn', 'nc', 'nu', 'nn']
              },
              {
                type: 'number',
                values: ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal'],
                data: ['eq', 'ne', 'lt', 'le', 'gt', 'ge']
              },
              {
                type: 'select',
                values: ['equal', 'not equal'],
                data: ['eq', 'ne']
              },
              {
                type: 'bool',
                values: ['equal', 'not equal'],
                data: ['eq', 'ne']
              }
            ];
    
        Get Result
    
            getRestult(result) {
                console.log(result);
            }

## Issue

    angular.json file
    
        "project": {
            ...
            "project-name": {
                ...
                "build": {
                    ...
                    "preserveSymlinks": true,
                    ...
                }
                ...
            }
            ...
        }
        

    tsconfig.app.json
    
    "include": [
        ...
        "./node_modules/mat-table-data-filter/**/*.ts"
    ]
    
