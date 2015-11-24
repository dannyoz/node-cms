var angular = require('../node_modules/angular/index');
var route = require('../node_modules/angular-route/index');
var app = angular.module('app', ['ngRoute']);

var homeController = require('./views/home/homeController'); 
	app.controller('homeController',homeController);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	 	
 	$routeProvider

        .when('/', {
        	templateUrl: 'views/home/home.tmpl.html',
        	controller : 'homeController'
        })

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});

}]);