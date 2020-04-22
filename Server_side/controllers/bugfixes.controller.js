var bugfixesService = require("../services/bugfixes.service");

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

  var bugfixesArray = detailsResult.BugFixes;
  for (var i in bugfixesArray) {
    var keyword = bugfixesArray[i].keyword;
    var sentiment = bugfixesArray[i].sentiment_score;
    var sentiment_score = parseFloat(sentiment).toFixed(1);

    if (keyword != "") {
      detailsArray.push([keyword, sentiment_score]);
    }
  }

  // sorting the array in ascending order of the sentiment score
  detailsArray.sort(sortSentimentScore);

  return response.send(detailsArray);
};

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

  var bugfixesArray = detailsResult.BugFixes;
  var reviewsArray = detailsResult.reviewsArray;

  for (var i in bugfixesArray) {
    var keyword = bugfixesArray[i].keyword;

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

        var text = reviewsArray[i].text;
        var partReview = partReviewWithKeyword(text, request.params.keyword);

        var rating = reviewsArray[i].rating;
        partReviewArray.push({ _id, username, date, partReview, rating });
      }
    }
  }
  return response.send(partReviewArray);
};

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
};

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

  var bugfixesArray = detailsResult.BugFixes;
  var reviewsArray = detailsResult.reviewsArray;

  for (var i in bugfixesArray) {
    var keyword = bugfixesArray[i].keyword;

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
};

function sortSentimentScore(a, b) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] < b[1] ? -1 : 1;
  }
}

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
