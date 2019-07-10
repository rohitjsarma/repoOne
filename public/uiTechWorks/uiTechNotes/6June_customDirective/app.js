// Creating app instance
var app  = angular.module("dialogApp", []);


app.controller("dialogCntrl", ["$scope", "$http", "$location", function($scope, $http, $location){
	$scope.name = "TESt";
}]);


app.directive("showDialog", function(){
	return {
		restrict: 'A',
		template: '<input type="button" value="Show Dialog">',
		link: function(scope, element, attr) {
			angular.element(element).on("click", function(){
				var dlgBody = $("<div></div>").addClass("dlgBody");
				
				var dlgHeader = $("<div class='dlgheader'></div>").html("<b>" + attr.title + "</b>");
				dlgBody.append(dlgHeader);
				var closeBtn = $("<div class='close'>X</div>");
				closeBtn.on("click", function(){
					$(".dialogCntainer").empty();
				});
				dlgBody.append(closeBtn);
				var btnCntainer = $("<div class='btnCntainr'></div>");

				var okbtn = $("<input type='button' value='OK'>");
				btnCntainer.append(okbtn);
				if (attr.type == 'okcancel') {
					var cancelbtn = $("<input type='button' value='Cancel'>");				
					btnCntainer.append(cancelbtn);
				}

				var dlgContent = $("<div class='dlgContent'>Click on ok or cancel button to save or skip saving...</div>")
				dlgBody.append(dlgContent);
				dlgBody.append(btnCntainer);
				$(".dialogCntainer").append(dlgBody);
			})
		}
	}
})