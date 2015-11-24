module.exports = function ($scope,$location){
	
	$scope.homeText = 'Node CMS'

	$scope.editMode = function(){
		$location.path('/editor');
	}
}; 