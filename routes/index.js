/* 
This file is main start script.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express, mongoose
*/
var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var collection;

client.connect(err => {
  if (err) {
    console.log("Error has occured while connecting to database: ", err);
  }
  collection = client.db("Safiyyah_ARC").collection("Reviews");
  console.log("Connected to database.");
  // client.close();
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
