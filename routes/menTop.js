var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var prodData = {	
	"prodDetails": [
		{
			"fabric": "Wrangler T-Shirt",
			"pattern": "Solid Slim Fit T-shirt",
			"sleeve": " Narrow Full Sleeve",
			"price":"$1000",
			"imageurl": "../images/m1.png"
		},
		{
			"fabric": "Round Neck T-shirt",
			"pattern": "Plane Color",
			"sleeve": "Half Sleeve",
			"price":"$700",
			"imageurl": "../images/m2.jpeg"
		},
		{
			"fabric": "Polo Neck Red T-Shirt",
			"pattern": "Solid Red",
			"sleeve": "Half Sleeve",
			"price":"$500",
			"imageurl": "../images/m3.jpeg"
		},
		{
			"fabric": "Men's Checkered Casual",
			"pattern": "Check pattern",
			"sleeve": "Full Sleeve",
			"price":"$850",
			"imageurl": "../images/m4.jpeg"
		},
		{
			"fabric": "Jockey Men's T-Shirt",
			"pattern": "Plane Black",
			"sleeve": "Sleeveless",
			"price":"$900",
			"imageurl": "../images/m5.jpeg"
		},
		{
			"fabric": "Jockey Roundneck T-Shirt",
			"pattern": "Plane Orange",
			"sleeve": "Full Sleeve",
			"price":"$1000",
			"imageurl": "../images/m8.jpeg"
		},
		{
			"fabric": " Men's Kurta",
			"pattern": "Plane Light Blue",
			"sleeve": "Full Sleeve",
			"price":"$400",
			"imageurl": "../images/men1.jpg"
		},
		{
			"fabric": "Raymond Breasted Suit",
			"pattern": "Plane Black Suit",
			"sleeve": "Full Sleeve",
			"price":"$2000",
			"imageurl": "../images/men4.jpg"
		},
		{
			"fabric": "Raymond Breasted Suit",
			"pattern": "Plane Black Roundneck",
			"sleeve": "Full Sleeve",
			"price":"$1800",
			"imageurl": "../images/men8.png"
		}

	]
}
	
	var data = JSON.stringify(prodData);
	setTimeout(function(){
		res.send(data);	
	}, 2000);
  	
});

module.exports = router;

