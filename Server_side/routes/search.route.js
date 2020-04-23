/**
 * @file Consists of all the routes that uses express to connect 
 * urls to search.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 */

const express = require("express");
const router = express.Router();
var searchController = require('../controllers/search.controller')

router.get('/:name', searchController.searchApp);

module.exports = router;