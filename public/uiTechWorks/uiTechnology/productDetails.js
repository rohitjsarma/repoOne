var productDetail = [
{
	name:'laptop',
	price: '200$',
	manufacture: 'Samsung',
	imageurl: '../images/samsung.jpg'
},
{
	name:'laptop',
	price: '500$',
	manufacture: 'Apple',
	imageurl: '../images/apple.jpg'
},
{
	name:'laptop',
	price: '150$',
	manufacture: 'Hp',
	imageurl: '../images/hp.jpg'
},
{
    name:'laptop',
	price: '250$',
	manufacture: 'Lenevo',
	imageurl: '../images/lenevo.jpg'
},
]
function loadProdDetails(pdetails) {
	var divblock=document.createElement("div");
	divblock.setAttribute("class","block");

	var ultag=document.createElement("ul");

	var li1=document.createElement("li");
	li1.innerHTML = "Product Name: " + pdetails.name;
	ultag.appendChild(li1);

	var li2=document.createElement("li");
	li2.innerHTML="price :" +pdetails.price;
	ultag.appendChild(li2);

	var li3=document.createElement("li");
	li3.innerHTML="Product Manf : " +pdetails.manufacture;
	ultag.appendChild(li3);

    var li4=document.createElement("li");
	var imgtag = document.createElement("img");
	imgtag.setAttribute("src", pdetails.imageurl);

	li4.appendChild(imgtag);
	ultag.appendChild(li4);
	divblock.appendChild(ultag);

	console.log(divblock);
	document.querySelector("#prodContainer").appendChild(divblock);
}
function showProdDetails() {
	for (var i = 0 ; i < productDetail.length; i++) {
		loadProdDetails(productDetail[i]);	
	}
}