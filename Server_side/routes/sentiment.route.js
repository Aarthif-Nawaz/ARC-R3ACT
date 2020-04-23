/**
 * @file Consists of all the routes that uses express to connect 
 * urls to sentiment.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 */

const express = require("express");
const router = express.Router();
var sentimentController = require('../controllers/sentiment.controller')

router.get('/:appId', sentimentController.getSentiment);

module.exports = router;