var app = angular.module("custmDirApp", []);

app.controller("custDirCntrl", function($scope){
	$scope.sDetails1 = {
		name: 'Prasad',
		gender: 'Male',
		age: 50
	};
	$scope.sDetails2 = {
		name: 'Shanu',
		gender: 'Male',
		age: 20
	}
});

app.directive("stdDetails", function(){
	return {
		restrict:'AE',
		templateUrl: "templates/stdDetails.htm",
		scope: {
			data: '=currentuser'
		}
		
	}
});