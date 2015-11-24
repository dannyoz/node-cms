var angular = require('../node_modules/angular/index');
var route = require('../node_modules/angular-route/index');
var cms = angular.module('cms', ['ngRoute']);

var onLoaded = require('./shared/onLoad'); 
	cms.run(onLoaded);

var routeConfig = require('./routing/routes'); 
	cms.config(routeConfig);

var homeController = require('./views/home/homeController'); 
	cms.controller('homeController',homeController);

var apiService = require('./services/apiService'); 
	cms.service('apiService',apiService);