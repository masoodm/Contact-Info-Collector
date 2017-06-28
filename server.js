var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('stereobasecontacts', ['stereobasecontacts']);
var bodyParser = require('body-parser');



app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/stereobasecontacts', function(req, res){
	console.log("I have recieved a GET request");
	db.stereobasecontacts.find(function(err, docs){
		// console.log(docs);
		res.json(docs);
	});
});

app.post('/stereobasecontacts', function(req,res){
	console.log(req.body);
	db.stereobasecontacts.insert(req.body, function(err, doc){
		res.json(doc);
	});
});



app.listen(3000);
console.log("Server running on port 3000");