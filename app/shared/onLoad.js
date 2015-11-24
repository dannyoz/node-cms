module.exports = function($rootScope,apiService){
	apiService.request('app').success(function(data){
		$rootScope.app = data;
	});
}