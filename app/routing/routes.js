var routes = require('./routes.json').routes;
console.log(routes);

module.exports = function($routeProvider, $locationProvider) {
	
	routes.forEach(function(route){
		$routeProvider.when(route.path, {
        	templateUrl: route.template,
        	controller : route.controller
        })
	});
        
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
}