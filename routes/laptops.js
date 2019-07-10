var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var lapData = {	
	"prodDetails": [
		{
			"name": "Lenovo Ideapad Core i3 6th Gen Laptop",
			"ram": "4GB RAM",
			"os": "DOS OPERATING SYS",
			"hdd":"1TB HDD",
			"price":"$1000",
			"imageurl": "../images/lenovo.png"
		},
		{
			"name": "Lenovo APU Dual Core A9 7th Gen  Laptop",
			"ram": "4GB RAM",
			"os": "DOS OPERATING SYS",
			"hdd":"1TB HDD",
			"price":"$1200",
			"imageurl": "../images/lenovo.png"
		},
		{
			"name": "Dell Inspiron Series Core i5 7th Gen",
			"ram": "3GB RAM",
			"os": "DOS OPERATING SYS",
			"hdd":"1TB HDD",
			"price":"$1800",
			"imageurl": "../images/dell.png"
		},
		{
			"name": "Apple MacBook Air Core i5 5th Gen ",
			"ram": "8 GB DDR3 RAM",
			"os": "64 bit Mac OS ",
			"hdd":"1TB HDD",
			"price":"$5000",
			"imageurl": "../images/apple.png"
		},
		{
			"name": " HP 15 Core i5 8th Gen Laptop",
			"ram": "8 GB DDR4 RAM",
			"os": "DOS OPERATING SYS",
			"hdd":"1TB HDD",
			"price":"$3500",
			"imageurl": "../images/hp.png"
		},
		{
			"name": "Acer Aspire 3 Pentium Quad Core ",
			"ram": "4 GB DDR4 RAM",
			"os": "DOS OPERATING SYS",
			"hdd":"500GB HDD",
			"price":"$4000",
			"imageurl": "../images/lap1.png"
		},
		{
			"name": "Lenovo Core i5 8th Gen Laptop",
			"ram": "8 GB DDR4 RAM",
			"os": "Window 10 SYS",
			"hdd":"1TB HDD",
			"price":"$3500",
			"imageurl": "../images/lap3.png"
		},
		{
			"name": "Dell 15 5000 Core i3 7th Gen",
			"ram": "8 GB DDR4 RAM",
			"os": "DOS OPERATING SYS",
			"hdd":"1TB HDD",
			"price":"$3500",
			"imageurl": "../images/lap7.png"
		},
		{
			"name": " HP 15 Core i3 8th Gen Laptop",
			"ram": "3 GB DDR4 RAM",
			"os": "Window OS SYS",
			"hdd":"500GB HDD",
			"price":"$3500",
			"imageurl": "../images/lap6.png"
		},
		{
			"name": "Apple Macbook Pro Core i7",
			"ram": "8 GB DDR4 RAM",
			"os": "64 bit Mac OS ",
			"hdd":"256GB SSD ",
			"price":"$8000",
			"imageurl": "../images/lap8.png"
		},
		{
			"name": "Asus Core i3 6th Gen Laptop",
			"ram": "8 GB DDR4 RAM",
			"os": "64bit Window Operating SYS",
			"hdd":"1TB HDD",
			"price":"$3500",
			"imageurl": "../images/lap4.png"
		}

		
	]}
	var data = JSON.stringify(lapData);
	setTimeout(function(){
		res.send(data);	
	}, 1000);
	
	
  	
});

module.exports = router;
