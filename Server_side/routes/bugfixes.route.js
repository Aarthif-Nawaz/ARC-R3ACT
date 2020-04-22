var express = require("express");
var router = express.Router();
var bugfixesController = require('../controllers/bugfixes.controller')

router.get('/keywords/:appId', bugfixesController.retrieveKeywords);
router.get('/reviews/:appId/:keyword', bugfixesController.relatedReviews);
router.get('/fullreview/:appId/:reviewId', bugfixesController.completeReview);
router.get('/common/:appId/', bugfixesController.commonReviews);

module.exports = router;