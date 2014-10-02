var app = angular.module('app', ['ngRoute'])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
     	$routeProvider

	        .when('/', {
	        	templateUrl: '/views/home.html'
	        })

	        .when('/styleguide', {
	        	templateUrl: '/views/styleguide/base.html'
	    	})
	        

		$locationProvider.html5Mode(true);
	}])


