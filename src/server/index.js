const express = require('express');
const os = require('os');
const mysql = require('mysql');
var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "PqIDRs1G70",
  password: "BDrBcLor07",
  database: 'PqIDRs1G70'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to DB!");
});

const app = express();

app.use(express.static('dist'));

// Some Helper Function
var getProductId = function(res, table, feature, input){
	var sql = 'SELECT * FROM '+table+' WHERE '+feature+ ' ='+input;
	con.query(sql, function (error, results, fields) {
	  if (error){
	  	console.error('error connecting: ' + error.stack);
    	return;
	  } else {
	  	var objs = [];
		for (var i = 0;i < results.length; i++) {
		    objs.push({
		    	product_id: results[i].product_id
		    })
		}
		var jsonResponse = JSON.stringify(objs);
		res.send(jsonResponse);
	  }
	})
}

var getProductDetail = function(res, table, feature, input){
	var sql = 'SELECT * FROM '+table+' WHERE '+feature+ ' ='+input;
	con.query(sql, function (error, results, fields) {
	  if (error){
	  	console.error('error connecting: ' + error.stack);
    	return;
	  } else {
	  	var objs = [];
		for (var i = 0;i < results.length; i++) {
		    objs.push({
		    	product_id: results[i].product_id,
		    	name: results[i].name,
		    	description: results[i].description,
		    	price: results[i].price,
		    	discounted_price: results[i].discounted_price,
		    	image:results[i].image,
		    	image_2:results[i].image_2,
		    	thumbnail:results[i].thumbnail,
		    	display:results[i].display
		    })
		}
		var jsonResponse = JSON.stringify(objs);
		res.send(jsonResponse);
	  }
	})
}

// API Endpoints
app.get('/api/user', (req, res) => res.send({ username: os.userInfo().username }));

/// Getting Category Data
app.get('/api/getCategory',function(req,res) {
	var categoryId = req.query.category;
	getProductId(res, 'product_category','category_id',categoryId)
});

/// Getting Product Data
app.get('/api/getProduct',function(req,res) {
	var input = req.query.product;
	getProductDetail(res, 'product','product_id',input)
});

/// Getting Attribute Data
app.get('/api/getAttribute',function(req,res) {
	var input = req.query.attribute;
	getProductId(res, 'product_attribute','attribute_value_id',input)
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));


