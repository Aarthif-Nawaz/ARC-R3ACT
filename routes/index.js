/* 
This file is main start script.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express, mongoose
*/

var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

mongoose  // connection to the mongodb
    .connect("mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Connected to database."))
    .catch(err => console.log("Error has occured: ", err))

module.exports = router;
