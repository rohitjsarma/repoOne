var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.query.productId);
	var topData = {	
		"prodDetails": [
			{
				image: '../images/w1.jpeg',
				pattern:  'Full Sleeve Solid Women',
				price: '$400',
				manufacturer: 'BuyNewTrend'
			},
			{
				image: '../images/w2.jpeg',
				pattern: 'Casual suit Women',
				price: '$800',
				manufacturer: 'RelianceTrend (3.8)'
			},
			{
				image: '../images/w3.jpeg',
				pattern: 'Casual Full Sleeve ',
				price: '$1000',
				manufacturer: 'fbbTrend'
			},
			{
				image: '../images/w4.jpeg',
				pattern: 'Sleveless Suit',
				price: '$900',
				manufacturer: 'FashionIndia'
			},
			{
				image: '../images/w5.jpeg',
				pattern: 'Casual half Sleeve',
				price: '$600',
				manufacturer: 'nush'
			},
			{
				image: '../images/w7.jpeg',
				pattern: 'Semi-Off Shoulder',
				price: '$1000',
				manufacturer: 'Nush'
			},
			{
				image: '../images/w22.jpg',
				pattern: 'White Chanderi Saree',
				price: '$950',
				manufacturer: 'Being Girl'
			},
			{
				image: '../images/w33.jpeg',
				pattern: 'Bridal Suit',
				price: '$1600',
				manufacturer: 'Nush'
			},
			{
				image: '../images/w44.jpg',
				pattern: 'Patiala salwar suit',
				price: '$900',
				manufacturer: 'Nush'
			},
			{
				image: '../images/w11.jpg',
				pattern: 'Bridal Lehnga',
				price: '$2600',
				manufacturer: 'Mashur Fab Women'
			},
			{
				image: '../images/w6.jpeg',
				pattern: 'Western Casusl',
				price: '$1700',
				manufacturer: 'Goochy'
			},
			{
				image: '../images/w55.jpeg',
				pattern: 'Classic Bridal Lehnga',
				price: '$3700',
				manufacturer: 'Goochy'
			}
		]
	};
	setTimeout(function(){
		res.send(JSON.stringify(topData));	
	}, 2000);
	
});

module.exports = router;
