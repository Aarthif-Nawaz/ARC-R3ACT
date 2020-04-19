/* 
This file retrieves invokes the python file to start the data science section of this project.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express
*/

// importing express JS module and assign it to a variable
var express = require("express");
var router = express.Router();
var searchController = require('../controllers/datascience.controller')

router.get('/', searchController.connectDatascience);

module.exports = router;
