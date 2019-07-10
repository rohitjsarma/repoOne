var prodDetails = [];

function loadProdDetails(pdetails) {
	// var divBlock = document.createElement("div");
	var divBlock = $("<div></div>").addClass("block");

	var ulTag = jQuery("<ul></ul>");
	var li1 = $("<li></li>").html("Product Name: " + pdetails.name);
	ulTag.append(li1);

	var li2 = $("<li></li>").html("Product Price: " + pdetails.price);
	ulTag.append(li2);

	var li3 = $("<li></li>").html("Product Manufacturer: " + pdetails.manu);
	ulTag.append(li3);

	var li4 = $("<li></li>");
	var imgtag = $("<img />").attr("src", pdetails.imageurl);
	li4.append(imgtag);
	ulTag.append(li4);
	divBlock.append(ulTag);
	$("#prodContainer").append(divBlock);
}	

function loadDetails() {


	$(".loadingBlock").show();


	$.ajax({
		//url: 'http://localhost:8081/products/getproductsinfo',
        url:'http://localhost:8081/products/getproductsinfo',
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