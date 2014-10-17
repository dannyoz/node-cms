
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 	
 	$routeProvider

        .when('/', {
        	templateUrl: '/views/global/home/home.html'
        })

        .when('/styleguide', {
        	templateUrl: '/views/modules/styleguide/base.html'
    	})

    	.when('/ng-masonry', {
        	templateUrl: '/views/do-masonry.html',
    	})
        

	$locationProvider.html5Mode(true);
}])