.controller('main', ['$scope', '$http', 'webApp', function ($scope, $http, webApp) {

	// Check to see if feed has loaded
    $scope.$watch(function(){
        $scope.isLoading = webApp.isLoading
    })

    console.log('LIVE RELOAD ADDED!!!')

}])
