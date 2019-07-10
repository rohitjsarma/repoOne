var app = angular.module("multiCntrlApp", []);

app.controller("multiAppCntrl", function($scope){
	$scope.transactionTrack = [];
});

app.controller("withdrwCntrl", function($scope, $rootScope){
	$scope.totalBalance = 300000;
	$scope.doWithDrawAmount = function() {
		$scope.shwWithDrwSuccess = true;
		$scope.totalBalance -= $scope.wthdrwAmnt;
		$rootScope.$broadcast("tbalanceupdte", $scope.totalBalance);
		var obj = {
			ttype: 'With Draw Amount',
			date: new Date(),
			tamount: $scope.wthdrwAmnt
		}
		$scope.transactionTrack.push(obj);
	}
	$scope.withDrwSuccessMsg = "Amount been with drawn successfly";
});

app.controller("depositCntrl", function($scope, $rootScope){
	$scope.$on("tbalanceupdte", function(event, args){
		$scope.totalBalance = args;
	});
	$scope.totalBalance = 300000;
	$scope.doDepositAmount = function() {
		$scope.dpstSuccess = true;
		$scope.totalBalance += $scope.dpstAmnt;
		var obj = {
			ttype: 'Depost Amount',
			date: new Date(),
			tamount: $scope.dpstAmnt
		}
		$scope.transactionTrack.push(obj);
	}
	$scope.dpstSuccessMsg = "successfly amount been deposited";
});

app.controller("FdCntrl", function($scope, $rootScope){
	$scope.totalBalance = 300000;
	$scope.$on("tbalanceupdte", function(event, args){
		$scope.totalBalance = args;
	});
	$scope.doFDAmount = function() {
	$scope.totalBalance -= $scope.fdAmnt;
		$scope.fdSuccess = true;
		var obj = {
			ttype: 'Fixed Deposit Amount',
			date: new Date(),
			tamount: $scope.fdAmnt
		}
		$scope.transactionTrack.push(obj);
	}
	$scope.fdSuccessMsg = "Successfly amount been FD";

});

app.controller("insurenceCntrl", function($scope, $rootScope){
	$scope.totalBalance = 300000;
	$scope.insMsg = "Please take some amount and get insured";
});