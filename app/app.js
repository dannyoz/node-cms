var angular = require('../node_modules/angular/angular.min');
var route = require('../node_modules/angular-route/angular-route.min');
var app = angular.module('app', ['ngRoute']);

var onLoaded = require('./shared/onLoad'); 
	app.run(onLoaded);

var routeConfig = require('./routing/routes'); 
	app.config(routeConfig);

var homeController = require('./views/home/homeController'); 
	app.controller('homeController',homeController);

var apiService = require('./services/apiService'); 
	app.service('apiService',apiService);