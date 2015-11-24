module.exports = function ($scope,apiService){
	$scope.homeText = 'This is the homepage'
	apiService.request('app').success(function(data){
		$scope.app = data;
	});
}; 