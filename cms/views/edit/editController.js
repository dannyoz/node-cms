module.exports = function ($scope, apiService){

	$scope.editText = 'Edit screen'
	$scope.textdata     = '';

	$scope.update = function(text){

		var data = {};
		data.text = text;
		apiService.submit('/update',data).success(function (response){
			console.log(response);
		});
	}

}; 