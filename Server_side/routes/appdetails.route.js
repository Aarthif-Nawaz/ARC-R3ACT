var express = require("express");
var router = express.Router();
var appdetailsController = require('../controllers/appdetails.controller')

router.get('/:appId', appdetailsController.storeDetails);

module.exports = router;