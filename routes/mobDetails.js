var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var mobData={
		"mobDetails":[
		{
			"name": "Vivo V9",
			"ram": "4GB RAM",
			"pxl": "13Mega PXL",
			"batr":"3000mah",
			"price":"$1000",
			"imageurl": "/images/vivo.png"
		},
		{
			"name": "OPPO F7 Youth ",
			"ram": "6GB RAM",
			"pxl": "13Mega PXL",
			"batr":"3500mah",
			"price":"$2000",
			"imageurl": "/images/oppo.png"
		},
		{
			"name": "Apple iPhone 7",
			"ram": "8GB RAM",
			"pxl": "13Mega PXL",
			"batr":"4000mah",
			"price":"$5000",
			"imageurl": "/images/applem.png"
		},
		{
			"name": "Samsung Galaxy ",
			"ram": "8GB RAM",
			"pxl": "13Mega PXL",
			"batr":"4000mah",
			"price":"$3600",
			"imageurl": "/images/samsung.png"
		},
		{
			"name": "Samsung  J2 ",
			"ram": "4GB RAM",
			"pxl": "8Mega PXL",
			"batr":"2800mah",
			"price":"$3000",
			"imageurl": "/images/mob1.png"
		},
		{
			"name": "lenevo k2 ",
			"ram": "8GB RAM",
			"pxl": "23Mega PXL",
			"batr":"4500mah",
			"price":"$4000",
			"imageurl": "/images/mob2.png"
		},
		{
			"name": "Apple iphone 7 ",
			"ram": "16GB RAM",
			"pxl": "20Mega PXL",
			"batr":"4800mah",
			"price":"$7000",
			"imageurl": "/images/mob3.png"
		},
		{
			"name": "Motorola ",
			"ram": "16GB RAM",
			"pxl": "13Mega PXL",
			"batr":"5000mah",
			"price":"$2500",
			"imageurl": "/images/mob4.png"
		},
		{
			"name": "Google Pixel ",
			"ram": "16GB RAM",
			"pxl": "23Mega PXL",
			"batr":"5000mah",
			"price":"$5500",
			"imageurl": "/images/mob5.png"
		},
		{
			"name": "Oppo F7 ",
			"ram": "16GB RAM",
			"pxl": "20 Mega PXL",
			"batr":"4000mah",
			"price":"$4000",
			"imageurl": "/images/mob6.png"
		}

		]}
	var data = JSON.stringify(mobData);
	setTimeout(function(){
		res.send(data);	
	}, 2000);
  	
});

module.exports = router;


	