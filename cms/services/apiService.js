module.exports = function($http){
	return {
		request : function(param){
			return $http.get("/api/"+param);
		},
		submit : function(path,data){
			return $http.post(path,data);
		}
	}
}