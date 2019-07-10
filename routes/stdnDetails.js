var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var stdData = {
		"studentDetails": [
          {
          	"name":"Razz",
          	"age":25,
          	"gender":"Male",
          	"location":"Hyderabad"
          },
          {
          	"name":"Riya",
          	"age":28,
          	"gender":"Female",
          	"location":"Secunderabad"
          },
          {
          	"name":"Rahul",
          	"age":29,
          	"gender":"Male",
          	"location":"Bangalore"
          },
          {
          	"name":"Vishal",
          	"age":28,
          	"gender":"Male",
          	"location":"Patna"
          }

	]}
	var data = JSON.stringify(stdData);
	setTimeout(function(){
		res.send(data);	
	}, 2000);
  	
});

module.exports = router;