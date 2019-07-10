var mobDetails=[];
function loadMobileDetails(mdetails) {
	$("#mobContainer").loadTemplate($("#prodTemplate"), mdetails, {append:true});
}
function loadDetails() {
	$(".loadingBlock").show();
	$.ajax({
		url: 'http://localhost:8081/getmobilesinfo/mobiles',
		method: 'GET',
		dataType: 'JSON',
		success: function(res) {
			$(".loadingBlock").hide();
			console.log("success communication");
			console.log(res);
			mobDetails = res.mobDetails;
			showProdDetails();
		},
		error: function(err) {
			$(".errBlock").show();
			$(".loadingBlock").hide();
		}
	});

}

function showProdDetails() {
	for (var i = 0 ; i < mobDetails.length; i++) {
		loadMobileDetails(mobDetails[i]);	
	}
}