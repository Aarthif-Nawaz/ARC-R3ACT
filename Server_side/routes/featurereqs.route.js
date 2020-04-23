/**
 * @file Consists of all the routes that uses express to connect 
 * urls to featurereqs.controller file.
 *
 * @author Safiyyah Thur Rahman - 2018025
 * @requires express
 */

const express = require("express");
const router = express.Router();
var featurereqController = require('../controllers/featurereqs.controller')

router.get('/keywords/:appId', featurereqController.retrieveKeywords);
router.get('/reviews/:appId/:keyword', featurereqController.relatedReviews);
router.get('/fullreview/:appId/:reviewId', featurereqController.completeReview);
router.get('/common/:appId/', featurereqController.commonReviews);

module.exports = router;