var app = angular.module('angularApp', []);

app.controller("angularCntrl", function($scope){
	$scope.applyStyles = function() {
		var container = document.querySelector("#container");
		angular.element(container).addClass("block");

		angular.element(document.querySelector("#container2")).removeClass("sample").css("border", "2px solid");
	}
	$scope.userDetails  = {
		uname: 'PRasad'
	};
	$scope.temp = {};

	$scope.copyDetails = function() {
		// $scope.temp = $scope.userDetails;
		$scope.temp = angular.copy($scope.userDetails);
	}

	$scope.details1 = {
		name: 'raj',
		product: 'laptop'
	};
	$scope.details2 = {
		name: 'raj',
		product: 'laptop'
	}
	$scope.result = angular.equals($scope.details1, $scope.details2);

	$scope.schoolDetails = {
		sname: 'ABC School',
		slocation: 'HYDERABAD'
	};
	$scope.stdDetails = {
		name: 'Krish',
		mark: '400'
	}
	angular.extend($scope.stdDetails, $scope.schoolDetails);

	/*for (key in $scope.stdDetails) {
		console.log(key);
		console.log($scope.stdDetails[key]);
	} */

	angular.forEach($scope.stdDetails, function(key, value){
		console.log("key" + key);
		console.log(value);
	});
});

angular.bootstrap(document.querySelector("#block1"), ["angularApp"]);
