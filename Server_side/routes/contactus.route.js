/**
 * @file Consists of all the routes that uses express to connect 
 * urls to contactus.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 */

const express = require("express");
const router = express.Router();
var contactusController = require('../controllers/contactus.controller')

router.post('/', contactusController.storeMessage);

module.exports = router;