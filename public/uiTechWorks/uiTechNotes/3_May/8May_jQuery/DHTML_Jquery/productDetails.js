var prodDetails = [
	{
		name: 'laptop',
		price: '200$',
		manu: 'Samsung',
		imageurl: 'images/laptop.png'
	},
	{
		name: 'laptop',
		price: '300$',
		manu: 'HTC',
		imageurl: 'images/laptop.png'
	},
	{
		name: 'laptop',
		price: '300$',
		manu: 'Samsung',
		imageurl: 'images/laptop.png'
	},
	{
		name: 'laptop',
		price: '300$',
		manu: 'Dell',
		imageurl: 'images/laptop.png'
	}
]
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
function showProdDetails() {
	for (var i = 0 ; i < prodDetails.length; i++) {
		loadProdDetails(prodDetails[i]);	
	}
}