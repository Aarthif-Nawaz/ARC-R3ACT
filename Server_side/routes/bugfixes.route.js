/**
 * @file Consists of all the routes that uses express to connect 
 * URLs to bugfixes.controller file.
 *
 * @author Safiyyah Thur Rahman - 2018025
 * @requires express
 */

const express = require("express");
const router = express.Router();
var bugfixesController = require('../controllers/bugfixes.controller')

router.get('/keywords/:appId', bugfixesController.retrieveKeywords);
router.get('/reviews/:appId/:keyword', bugfixesController.relatedReviews);
router.get('/fullreview/:appId/:reviewId', bugfixesController.completeReview);
router.get('/common/:appId/', bugfixesController.commonReviews);

module.exports = router;