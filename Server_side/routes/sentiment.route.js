var express = require("express");
var router = express.Router();
var sentimentController = require('../controllers/sentiment.controller')

router.get('/', sentimentController.getSentiment);

module.exports = router;