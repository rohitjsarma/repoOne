var prodDetails = [];

function loadProdDetails(pdetails) {
	$("#prodContainer").loadTemplate($("#prodTemplate"), pdetails, {append:true});
}	

function loadDetails() {
	$(".loadingBlock").show();
	$.ajax({
		url: 'http://localhost:8081/products/getproductsinfo',
		method: 'GET',
		dataType: 'JSON',
		success: function(res) {
			$(".loadingBlock").hide();
			console.log("success communication");
			console.log(res);
			prodDetails = res.prodDetails;
			showProdDetails();
		},
		error: function(err) {
			$(".errBlock").show();
			$(".loadingBlock").hide();
		}
	});

}

function showProdDetails() {
	for (var i = 0 ; i < prodDetails.length; i++) {
		loadProdDetails(prodDetails[i]);	
	}
}