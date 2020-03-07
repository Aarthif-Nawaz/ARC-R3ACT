var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

mongoose  // connection to the mongodb
    .connect("mongodb://localhost:27017/arc", { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Connected to database."))
    .catch(err => console.log("Error has occured: ", err))

module.exports = router;
