var app = angular.module("multiCntrlApp", []);

app.controller("multiAppCntrl", function($scope){
	$scope.transactionTrack = [];
	
});

app.controller("withdrwCntrl", function($scope, $rootScope){
	$rootScope.totalBalance = 300000;
	$scope.doWithDrawAmount = function() {
		$scope.shwWithDrwSuccess = true;
		$rootScope.totalBalance -= $scope.wthdrwAmnt;
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
	
	$scope.doDepositAmount = function() {
		$scope.dpstSuccess = true;
		$rootScope.totalBalance += $scope.dpstAmnt;
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
	
	$scope.doFDAmount = function() {
		$rootScope.totalBalance -= $scope.fdAmnt;
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
	
	$scope.insMsg = "Please take some amount and get insured";
});