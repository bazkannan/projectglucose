var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'staybeastly',
	database: 'users'
});

router.post('/', function(req, res, next) {
  
	var username = req.body.username;
	var password = req.body.password;

	connection.query(
		"SELECT * FROM user WHERE username = ? AND password = ?",
		[username, password], function (err, row, field) {

		if (err) {
			console.log(err);
			res.send({ 'success': false, 'message': 'Could not connect to the database'});
		}

		if (row.length > 0) {
			res.send({ 'success': true, 'user': row[0].username });
		} else {
			res.send({ 'success': false, 'message': 'User not found' });
		}

	});

});

module.exports = router;
