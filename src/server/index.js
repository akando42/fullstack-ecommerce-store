const express = require('express');
const os = require('os');
const mysql = require('mysql');
var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "PqIDRs1G70",
  password: "BDrBcLor07"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));


