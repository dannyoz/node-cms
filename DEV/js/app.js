var app = angular.module('app', ['ngRoute'])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
     	$routeProvider
	        .when('/', {
	        	templateUrl: '/views/home.html',
	        	controller: 'home'
	    })
	        

		$locationProvider.html5Mode(true);
	}])

	.controller('home', ['$scope', function($scope) {
      	$scope.model ={
      		message: "hello"
      	}
  	}])

