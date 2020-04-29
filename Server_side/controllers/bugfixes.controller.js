/**
 * @file Handles all the functions related to the
 * processing the bug fixes of the app.
 *
 * @author Safiyyah Thur Rahman - 2018025
 */

var bugfixesService = require("../services/bugfixes.service");

/**
 * Retrieves and displays keywords related to
 * bug fixes from the database.
 */
exports.retrieveKeywords = async function (request, response) {
  var detailsArray = [];
  var detailsResult = [];

  try {
    detailsResult = await bugfixesService.getDetails({
      appId: request.params.appId,
    });

    // Store all the keywords and review ids related to bug fixes
    var bugfixesArray = detailsResult.BugFixes;
    for (var i in bugfixesArray) {
      var keyword = bugfixesArray[i].keyword;
      var sentiment = bugfixesArray[i].sentiment_score;
      var sentiment_score = parseFloat(sentiment);

      // Store all the details except the empty keyword into an array
      if (keyword != "") {
        detailsArray.push([keyword, sentiment_score]);
      }
    }

    // Sorting the array in ascending order of the sentiment score
    // detailsArray.sort(sortSentimentScore);
    var result = sortAscArray(detailsArray);
    return response.send(result);
  } catch (error) {
    return response.status(500).send(error);
  }
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

    // Store all the keywords and review ids related to bug fixes
    var bugfixesArray = detailsResult.BugFixes;
    // Store all the reviews of the app into an array
    var reviewsArray = detailsResult.reviewsArray;

    for (var i in bugfixesArray) {
      var keyword = bugfixesArray[i].keyword;

      // Checking the keyword entered is
      // equal to the keyword in the array
      if (keyword == request.params.keyword) {
        var reviewIDs = bugfixesArray[i].reviewIDs;
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

          // Storing the part of the review containing the keyword
          var text = reviewsArray[i].text;
          var partReview = partReviewWithKeyword(text, request.params.keyword);

          var rating = reviewsArray[i].rating;
          partReviewArray.push({ _id, username, date, partReview, rating });
        }
      }
    }

    // Checking if the array is empty
    if (!Array.isArray(partReviewArray) || !partReviewArray.length) {
      // Displaying error message if the keyword does not exist
      return response.send("Invalid keyword!");
    } else {
      return response.send(partReviewArray);
    }
  } catch (error) {
    return response.status(500).send(error);
  }
};

/**
 * Retrieves and displays all the reviews related to bug fixes that
 * cannot be grouped into a common keyword from the database.
 */
exports.commonReviews = async function (request, response) {
  var reviewIdArray = [];
  var otherReviewArray = [];
  var detailsResult = [];

  try {
    detailsResult = await bugfixesService.getDetails({
      appId: request.params.appId,
    });

    // Store all the keywords and review ids related to bug fixes
    var bugfixesArray = detailsResult.BugFixes;
    // Store all the reviews of the app into an array
    var reviewsArray = detailsResult.reviewsArray;

    for (var i in bugfixesArray) {
      var keyword = bugfixesArray[i].keyword;

      // Storing all the details and reviews of the empty keyword to an array
      if (keyword == "") {
        var reviewIDs = bugfixesArray[i].reviewIDs;
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
  } catch (error) {
    return response.status(500).send(error);
  }
};


/**
 * Splits the complete review into substrings using full stop, question mark
 * or exclamation mark.
 *
 * @param {string} completeReview The complete review from the database.
 * @param {string} keyword The keyword to be checked in the substring.
 * @returns {string} The part of the review that contains the keyword.
 */
function partReviewWithKeyword(completeReview, keyword) {
  var partReview; // Store the part of the review containing the keyword
  var splitSentence = ""; // Store the part of the review split by full stop

  // Split the review by question mark, exclamation mark or full stop
  var text = completeReview.split(/[?!.]/);

  for (var index in text) {
    var sentence = text[index];

    // Checking if the string includes the keyword
    var booleanValue = sentence.includes(keyword);
    if (booleanValue) {
      // Concatenating the sentence to the variable
      // if the keyword exists in the sentence
      splitSentence += sentence + ".";
    }
  }

  if (splitSentence == "") {
    partReview = text;
  } else {
    // If the review does not contain the keyword, return the complete review
    partReview = splitSentence;
  }
  return partReview;
}

/**
 * Sorts the 2D array in ascending order of the second element.
 *
 * @param {array} array An unsorted array
 * @returns {array} The array sorted in ascending order.
 */
function sortAscArray(array) {
  var swap;
  var n = array.length - 1;
  do {
    swap = false;
    for (var i = 0; i < n; i++) {
      if (array[i][1] > array[i + 1][1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
    n--;
  } while (swap);
  return array;
}
