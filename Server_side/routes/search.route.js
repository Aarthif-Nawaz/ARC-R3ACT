/* 
This file handles all the search related methods.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express
*/

const express = require("express");
const router = express.Router();
var searchController = require('../controllers/search.controller')

router.get('/:name', searchController.searchApp);

module.exports = router;