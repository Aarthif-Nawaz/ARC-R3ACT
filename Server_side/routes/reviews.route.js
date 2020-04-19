var express = require("express");
var router = express.Router();
var reviewsController = require('../controllers/reviews.controller')

router.get('/:appId', reviewsController.storeReviews);

module.exports = router;