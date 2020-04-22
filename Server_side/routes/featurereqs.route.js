var express = require("express");
var router = express.Router();
var featurereqController = require('../controllers/featurereqs.controller')

router.get('/keywords/:appId', featurereqController.retrieveKeywords);
router.get('/reviews/:appId/:keyword', featurereqController.relatedReviews);
router.get('/fullreview/:appId/:reviewId', featurereqController.completeReview);
router.get('/common/:appId/', featurereqController.commonReviews);

module.exports = router;