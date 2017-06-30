var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('stereobasecontacts', ['stereobasecontacts']);
var bodyParser = require('body-parser');
// var mongodb = require('mongodb');
// var path = require('path');
var app = express();

// var pg = require('pg');

var port = process.env.PORT || 8080;

// var CONTACTS_COLLECTION = "contacts";
// var ObjectID = mongodb.ObjectID;


//static stuff in app will be allowed to run in __dirname which is whatever the folder name is...
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use('/bower_components', express.static(__dirname+'/bower_components'));


// // mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database) {
// // 	if (err){
// // 		console.log(err);
// // 		process.exit(1);
// // 	}

// // 	db = database;
// // 	console.log("Database connection ready");

// // 	app.listen(port, function(){
// // 	console.log("app running on port" + port);
// // });


// // })

// //routes

// app.get('/db', function(request, response) {
// 	pg.connect(process.env.DATABASE_URL)
// })



app.get("/", function(req,res){
	res.render("index");
});


app.get('/stereobasecontacts', function(req, res){
	// db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs){
	// 	if(err){
	// 		handleError(res, err.message, "Failed to get contacts.");
	// 	} else {
	// 		res.status(200).json(docs);
	// 	}
	// });
	console.log("I have recieved a GET request");
	db.stereobasecontacts.find(function(err, docs){
		// console.log(docs);
		res.json(docs);
	});
});

app.post('/stereobasecontacts', function(req,res){
	// console.log(req.body);
	// var newContact = req.body;
	// newContact.createDate = new Date();

	// db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
 //    if (err) {
 //      handleError(res, err.message, "Failed to create new contact.");
 //    } else {
 //      res.status(201).json(doc.ops[0]);
 //    }
 //  });

	db.stereobasecontacts.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.listen(port, function(){
	console.log("app running on port" + port);
});
