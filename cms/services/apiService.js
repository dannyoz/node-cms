module.exports = function($http){
	return {
		request : function(param){
			return $http.get("/api/"+param);
		}
	}
}