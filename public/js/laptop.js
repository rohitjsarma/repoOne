var prodDetails = [];

function loadProdDetails(pdetails) {
	$("#prodContainer").loadTemplate($("#prodTemplate"), prodDetails, {append:true});
}
function loadDetails() {
	
	$.ajax({
		url: 'http://localhost:8081/getLapDetails/laptops',
		method: 'GET',
		dataType: 'JSON',
		success: function(res) {
			
			console.log("success communication");
			console.log(res);
			prodDetails = res.prodDetails;
			showProdDetails();
		},
		error: function(err) {
			$(".errBlock").show();
			
		}
	});

}
function showProdDetails(pdetails) {
	for (var i = 0 ; i < prodDetails.length; i++) {
		loadProdDetails(prodDetails[i]);	
	}
}