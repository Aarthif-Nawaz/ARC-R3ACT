/**
 * @file Consists of all the routes that uses express to connect
 * URLs to sentiment.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 */

const express = require("express");
const router = express.Router();
var sentimentController = require("../controllers/sentiment.controller");

/**
 * Route serving overall sentiment page.
 */

router.get("/:appId", sentimentController.getSentiment);

module.exports = router;
