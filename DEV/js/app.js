var app = angular.module('app', ['ngRoute'])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
     	$routeProvider
	        .when('/', {
	        	templateUrl: '/views/home.html',
	        	controller: 'main'
	    })
	        

		$locationProvider.html5Mode(true);
	}])


