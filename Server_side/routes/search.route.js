/**
 * @file Consists of all the routes that uses express to connect
 * URLs to search.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 */

const express = require("express");
const router = express.Router();
var searchController = require("../controllers/search.controller");

/**
 * Route serving search app page.
 */

router.get("/:name", searchController.searchApp);

module.exports = router;
