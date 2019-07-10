var onlineApp = angular.module("onlineShpngApp", ["ngRoute"]);

onlineApp.config(function($routeProvider){
	$routeProvider.when("/prodDetails", {
		templateUrl: 'templates/prodDetails.htm',
		controller: "prodCntrl"
	}).when("/fgpwd", {
		templateUrl: 'templates/forgtPwd.htm'
	}).when("/regpage", {
		templateUrl: 'templates/registration.htm'
	}).when("/login", {
		templateUrl: 'templates/login.htm',
		controller: 'loginCntrl'
	}).otherwise({
		templateUrl: 'templates/homepage.htm',
		
	});
});

onlineApp.controller("prodCntrl", function($scope, $location, $rootScope){
	if ($rootScope.isvalidUser != true) {
		$location.url("/");
	}
	$scope.showLogin = function() {
		$location.url("/");
	}
	$scope.prodDetails = [
		{
			name: 'laptop',
			price: '300$'
		},
		{
			name: 'Tops',
			price: '300$'
		},
		{
			name: 'Bag',
			price: '300$'
		},
		{
			name: 'Mobile',
			price: '300$'
		},
		{
			name: 'Computer',
			price: '300$'
		}
	]
});

onlineApp.controller("mainCntrl", function($scope, $location){
	$scope.showLogin = function()	 {
		$location.url("/login");
	}

});
onlineApp.controller("loginCntrl" , function($scope, $location, $rootScope){
	$scope.showPage = function(type) {
		if (type == 'fg') {
			$location.url("/fgpwd");
			return;
		} else if (type=='reg'){
			$location.url("/regpage");
		}
	}
	
	$scope.showProdDetails = function(){
		console.log($scope.uname);
		console.log($scope.upwd);
		if ($scope.uname == 'admin' && $scope.upwd == 'test') {
			$rootScope.isvalidUser = true;
			$location.url('/prodDetails');
		} else {
			$scope.isInvalid = true;
		}
	}

});

