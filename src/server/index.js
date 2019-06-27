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
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/getCategory',function(req,res) {
	var categoryId = req.query.category;
	var sql    = 'SELECT * FROM product_category WHERE category_id = ' + con.escape(categoryId);
	var results = con.query(sql, function (error, results, fields) {
	  if (error){
	  	console.error('error connecting: ' + error.stack);
    	return;
	  } else {
	  	var objs = [];
		for (var i = 0;i < results.length; i++) {
		    objs.push({product_id: results[i].product_id})
		}
		var jsonResponse = JSON.stringify(objs);
		res.send(jsonResponse);
	  }
	})
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));


