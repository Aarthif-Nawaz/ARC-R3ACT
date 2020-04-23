/**
 * @file Consists of all the routes that uses express to connect 
 * urls to appdetails.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 */

const express = require("express");
const router = express.Router();
var appdetailsController = require('../controllers/appdetails.controller')

router.get('/:appId', appdetailsController.storeDetails);

module.exports = router;