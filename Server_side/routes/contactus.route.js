var express = require("express");
var router = express.Router();
var contactusController = require('../controllers/contactus.controller')

router.post('/', contactusController.storeMessage);

module.exports = router;