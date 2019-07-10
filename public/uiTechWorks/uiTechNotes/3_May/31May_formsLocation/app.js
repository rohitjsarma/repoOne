var app = angular.module("App", []);

app.config(function(){
	console.log("test config");
});

app.controller("appCntrl", function($scope, $location){
	console.log("test cntrl");
	console.log($location.absUrl());
	console.log($location.port());
	console.log($location.protocol());

	$location.url("/test");
});