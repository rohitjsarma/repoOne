var prodDetails = [
	{
		name: 'laptop',
		price: '200$',
		manu: 'Samsung',
		imageurl: '../../images/laptop.jpg'
		//imageurl:'///C:/webapplication/public/uiTechWorks/uiTechNotes/images/laptop.jpg'
	},
	{
		name: 'laptop',
		price: '300$',
		manu: 'HTC',
		
		imageurl: '../../images/laptop.jpg'
		//imageurl:'///C:/webapplication/public/uiTechWorks/uiTechNotes/images/laptop.jpg'
	},
	{
		name: 'laptop',
		price: '300$',
		manu: 'Samsung',
		
		imageurl: '../../images/laptop.jpg'
		//imageurl:'///C:/webapplication/public/uiTechWorks/uiTechNotes/images/laptop.jpg'
	},
	{
		name: 'laptop',
		price: '300$',
		manu: 'Dell',

		imageurl: '../../images/laptop.jpg'
		//imageurl:'///C:/webapplication/public/uiTechWorks/uiTechNotes/images/laptop.jpg'
	},
]
function loadProdDetails(pdetails) {
	var divBlock = document.createElement("div");
	divBlock.setAttribute("class", "block");

	var ulTag = document.createElement("ul");
	var li1 = document.createElement("li");
	li1.innerHTML = "Product Name: " + pdetails.name;
	ulTag.appendChild(li1);

	var li2 = document.createElement("li");
	li2.innerHTML = "Product Price: " + pdetails.price;
	ulTag.appendChild(li2);

	var li3 = document.createElement("li");
	li3.innerHTML = "Product Manufacturer: " + pdetails.manu;
	ulTag.appendChild(li3);

	var li4 = document.createElement("li");
	var imgtag = document.createElement("img");
	imgtag.setAttribute("src", pdetails.imageurl);
	li4.appendChild(imgtag);
	ulTag.appendChild(li4);
	divBlock.appendChild(ulTag);

	console.log(divBlock);
	document.querySelector("#prodContainer").appendChild(divBlock);
}	
function showProdDetails() {
	for (var i = 0 ; i < prodDetails.length; i++) {
		loadProdDetails(prodDetails[i]);	
	}
}