/**
 * @file Consists of all the routes that uses express to connect
 * URLs to appdetails.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 */

const express = require("express");
const router = express.Router();
var appdetailsController = require("../controllers/appdetails.controller");

/**
 * Route serving similar apps page.
 */

router.get("/:appId", appdetailsController.storeDetails);

module.exports = router;
