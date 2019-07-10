var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var prodData = {	
	"prodDetails": [
		{
			"name": "laptop",
			"price": "200$",
			"manu": "Samsung",
			"imageurl": "images/laptop.png"
		},
		{
			"name": "laptop",
			"price": "300$",
			"manu": "HTC",
			"imageurl": "images/laptop.png"
		},
		{
			"name": "laptop",
			"price": "300$",
			"manu": "Samsung",
			"imageurl": "images/laptop.png"
		},
		{
			"name": "laptop",
			"price": "300$",
			"manu": "Dell",
			"imageurl": "images/laptop.png"
		},
		{
			"name": "mobile",
			"price": "500$",
			"manu": "Dell",
			"imageurl": "images/laptop.png"
		}
	]}
	
	var data = JSON.stringify(prodData);
	setTimeout(function(){
		res.send(data);	
	}, 5000);
  	
});

module.exports = router;
