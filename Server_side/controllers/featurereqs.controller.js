/**
 * @file Handles all the functions related to the 
 * processing the feature requests of the app.
 *
 * @author Safiyyah Thur Rahman - 2018025
 */

var bugfixesService = require("../services/bugfixes.service");

/**
 * Retrieves and displays keywords related to feature 
 * requests from the database.
 */
exports.retrieveKeywords = async function (request, response) {
  var detailsArray = [];
  var detailsResult = [];

  try {
    detailsResult = await bugfixesService.getDetails({
      appId: request.params.appId,
    });
  } catch (error) {
    return response.status(500).send(error);
  }

  var featurereqArray = detailsResult.FeatureRequests;
  for (var i in featurereqArray) {
    var keyword = featurereqArray[i].keyword;
    var sentiment = featurereqArray[i].sentiment_score;
    var sentiment_score = parseFloat(sentiment).toFixed(1);

    if (keyword != "") {
      detailsArray.push([keyword, sentiment_score]);
    }
  }

  // sorting the array in ascending order of the sentiment score
  detailsArray.sort(sortSentimentScore);

  return response.send(detailsArray);
};

/**
 * Retrieves and displays reviews that discusses the 
 * keyword from the database.
 */
exports.relatedReviews = async function (request, response) {
  var reviewIdArray = [];
  var partReviewArray = [];
  var detailsResult = [];

  try {
    detailsResult = await bugfixesService.getDetails({
      appId: request.params.appId,
    });
  } catch (error) {
    return response.status(500).send(error);
  }

  var featurereqArray = detailsResult.FeatureRequests;
  var reviewsArray = detailsResult.reviewsArray;

  for (var i in featurereqArray) {
    var keyword = featurereqArray[i].keyword;

    if (keyword == request.params.keyword) {
      var reviewIDs = featurereqArray[i].reviewIDs;
      reviewIdArray.push(reviewIDs);
      break;
    }
  }

  for (var index in reviewIdArray[0]) {
    var id = reviewIdArray[0][index];

    for (var i in reviewsArray) {
      var keyReviewId = reviewsArray[i]._id;

      if (keyReviewId == id) {
        var _id = reviewsArray[i]._id;
        var username = reviewsArray[i].userName;
        var date = reviewsArray[i].date;

        var text = reviewsArray[i].text;
        var partReview = partReviewWithKeyword(text, request.params.keyword);

        var rating = reviewsArray[i].rating;
        partReviewArray.push({ _id, username, date, partReview, rating });
      }
    }
  }

  if (!Array.isArray(partReviewArray) || !partReviewArray.length) {
    return response.send("Invalid keyword!");
  } else {
    return response.send(partReviewArray);
  }
};

/**
 * Retrieves and displays the complete review related
 * to feature requests from the database.
 */
exports.completeReview = async function (request, response) {
  var completeReview = [];
  var detailsResult = [];

  try {
    detailsResult = await bugfixesService.getDetails({
      appId: request.params.appId,
    });
  } catch (error) {
    return response.status(500).send(error);
  }

  var reviewsArray = detailsResult.reviewsArray;
  for (var i in reviewsArray) {
    var reviewId = reviewsArray[i]._id;

    if (reviewId == request.params.reviewId) {
      var username = reviewsArray[i].userName;
      var date = reviewsArray[i].date;
      var text = reviewsArray[i].text;
      var version = reviewsArray[i].version;
      var rating = reviewsArray[i].rating;
      completeReview.push({
        reviewId,
        username,
        date,
        text,
        version,
        rating,
      });
      return response.send(completeReview);
    }
  }
  return response.send("Invalid review id!");
};

/**
 * Retrieves and displays all the reviews related to feature requests
 * that cannot be grouped into a common keyword from the database.
 */
exports.commonReviews = async function (request, response) {
  var reviewIdArray = [];
  var otherReviewArray = [];
  var detailsResult = [];

  try {
    detailsResult = await bugfixesService.getDetails({
      appId: request.params.appId,
    });
  } catch (error) {
    return response.status(500).send(error);
  }

  var featurereqArray = detailsResult.FeatureRequests;
  var reviewsArray = detailsResult.reviewsArray;

  for (var i in featurereqArray) {
    var keyword = featurereqArray[i].keyword;

    if (keyword == "") {
      var reviewIDs = featurereqArray[i].reviewIDs;
      reviewIdArray.push(reviewIDs);
      break;
    }
  }

  for (var index in reviewIdArray[0]) {
    var id = reviewIdArray[0][index];
    for (var i in reviewsArray) {
      var keyReviewId = reviewsArray[i]._id;
      if (keyReviewId == id) {
        var _id = reviewsArray[i]._id;
        var username = reviewsArray[i].userName;
        var date = reviewsArray[i].date;
        var text = reviewsArray[i].text;
        var rating = reviewsArray[i].rating;
        otherReviewArray.push({ _id, username, date, text, rating });
      }
    }
  }
  return response.send(otherReviewArray);
};

/**
 * Sorts the 2D array in descending order of the second element.
 *
 * @param {float} a An element of the sub array
 * @param {float} b Next element of the sub array.
 * @returns {array} The array sorted in descending order.
 */
function sortSentimentScore(a, b) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] > b[1] ? -1 : 1;
  }
}

/**
 * Splits the complete review into substrings using full stop as the delimeter.
 * 
 * @param {string} completeReview The complete review from the database.
 * @param {string} keyword The keyword to be checked in the substring.
 * @returns {string} The part of the review that contains the keyword.
 */
function partReviewWithKeyword(completeReview, keyword) {
  var partReview;
  var splitSentence = "";
  var text = completeReview.split(/[?!.]/);
  for (var index in text) {
    var sentence = text[index];
    var booleanValue = sentence.includes(keyword);

    if (booleanValue) {
      splitSentence += sentence + ".";
    }
  }
  if (splitSentence == "") {
    partReview = text;
  } else {
    partReview = splitSentence;
  }

  return partReview;
}
