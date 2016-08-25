# Angular Clear Input Field Directive
------

This repo consists of an angularJs directive which is used to clear the input fields.

## Install
You can install this package using bower.


```
bower install angular-clear-field
```
Then add below `<script>` and `<link>` tag to your `index.html` file
```html
<script src="bower_components/angularClearFieldDirective/script.js"></script>
<link rel="stylesheet" href="bower_components/angularClearFieldDirective/css/custom.css">
```
## Inject Module Dependency
Inject `directive.clearField` module
```javascript
var app = angular.module("myApp", ["directive.clearField"]);
```
## Dependencies
1. [AngularJs library](https://angularjs.org/) 

## How to use

1. To use this directive add `clear-field` attribute to your input or textarea field.

```html
<input type="text" ng-model="name" clear-field>
```
For `textarea`,
```html
<textarea cols="30" rows="10" ng-model="name" clear-field></textarea>
```

## Demo
Demo [Plunkr](https://plnkr.co/edit/WHjRviyuYfFVfg2TnVUP?p=preview)