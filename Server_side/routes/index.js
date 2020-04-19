/* 
This file is main start script.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express
*/
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
