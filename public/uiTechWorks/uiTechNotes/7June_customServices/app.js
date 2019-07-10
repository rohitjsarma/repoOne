var app = angular.module("customApp",[]);

app.value("AppName", "Online Shopping App");

app.config(function(MaxAppUsers, appUtilsProvider){
	console.log(MaxAppUsers);
	appUtilsProvider.setAppName("Online shopping Application");
	appUtilsProvider.getAppName();
});

app.controller("customCntrl", function($scope, AppName, salUtils, appUtils){
	appUtils.showAppName();
	$scope.sal = 3234234;
	$scope.TotalSal = salUtils.getTotalSal($scope.sal);
	salUtils.showMsg();
});

app.constant("MaxAppUsers", 1000);
/*
app.factory("salUtils", function(){
	function getPf(sal) {
		return (sal*12)/100;
	}
	function getHra(sal) {
		return (sal*25)/100;
	}
	var temp = "TEST";
	var obj = {
		showMsg: function() {
			console.log("Hello");
		},
		getTotalSal: function(sal) {
			var totalSal = getPf(sal)  + getHra(sal) + sal; 
			return totalSal;
		},
		count: 200
	};
	return obj;
});

*/
app.service("salUtils", function(){
	function getPf(sal) {
		return (sal*12)/100;
	}
	function getHra(sal) {
		return (sal*25)/100;
	}
	var temp = "TEST";
	
	this.showMsg = function() {
			console.log("Hello");
	};
	this.getTotalSal = function(sal) {
			var totalSal = getPf(sal)  + getHra(sal) + sal; 
			return totalSal;
	};
	this.count = 200;
});

app.provider("appUtils", function(){
	this.appName = "";
	this.setAppName = function(name) {
		this.appName = name;
	}
	this.getAppName = function() {
		console.log("Current app name is" + this.appName);
	}
	this.$get = function() {
		var self = this;
		return {
			showAppName: function(){
				console.log(self.appName);
			}
		};
	}
});