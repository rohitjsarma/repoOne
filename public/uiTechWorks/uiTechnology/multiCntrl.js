angular.module("myapp",[]).controller("c1",function($scope,$rootScope){
	$rootScope.transactionTrack = [];
    $rootScope.totalBalance=500000
    $scope.withdrawFun = function(){
    	$scope.scsMsg=true
    	$rootScope.totalBalance -= $scope.wthdrwAmnt
    	$scope.successMsg="Withdraw Transaction Done Suucessfully"
    	var obj = {
			type: 'With Draw Amount',
			date: new Date(),
			tamount: $scope.wthdrwAmnt
	
		}
		$scope.transactionTrack.push(obj);
    }
 })
   .controller("c2",function($scope,$rootScope){
   	$rootScope.totalBalance=500000
   	$scope.depositFun=function(){
   		$scope.dpSscsMsg=true
   		$rootScope.totalBalance += $scope.dpstAmnt
   		$scope.dpsuccessMsg="Deposit Transaction Done Suucessfully"
   		var obj = {
			type: 'With Draw Amount',
			date: new Date(),
			tamount: $scope.wthdrwAmnt
	
		}
		$scope.transactionTrack.push(obj);

   	}


   })
  

