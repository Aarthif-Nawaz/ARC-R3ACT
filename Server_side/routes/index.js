/* 
This file is main start script.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express
*/
/**
 * @file This file is the main entry point of this application.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 */

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
