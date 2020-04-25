/**
 * @file Consists of all the routes that uses express to connect
 * URLs to fullreview.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 */

const express = require("express");
const router = express.Router();
var fullreviewController = require("../controllers/fullreview.controller");

/**
 * Route serving complete review page.
 */

router.get("/:appId/:reviewId", fullreviewController.completeReview);

module.exports = router;
