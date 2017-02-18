var app=angular.module("mapp",[]);
	app.controller('mylist',function($scope,$http){
		$http.get("js/restaurants.json")
		.then(function(data){
			$scope.data=data;
			console.log(data);
		})
	})