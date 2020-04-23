/**
 * @file Handles all the functions related procsssing 
 * the overall sentiment of the app.
 *
 * @author Shiromi Thevarajan - 2018117
 */

var sentimentService = require("../services/sentiment.service");

/**
 * Retrieves and displays the overall sentiment of the 
 * app from the database,
 */
exports.getSentiment = async function (request, response) {
  var detailsArray = [];

  var title;
  var summary;
  var installs;
  var scoreText;
  var reviews;
  var priceText;
  var developer;
  var genre;
  var icon;
  var sentiment;

  var postive = 0;
  var neutral = 0;
  var negative = 0;
  var oneStar = 0;
  var twoStars = 0;
  var threeStars = 0;
  var fourStars = 0;
  var fiveStars = 0;

  // Using the router module to get the request of the call from the frontend
  try {
    var resultDetails = await sentimentService.getSentiment({
      appId: request.params.appId,
    });
    title = resultDetails.title;
    summary = resultDetails.summary;
    installs = resultDetails.installs;
    scoreText = resultDetails.scoreText;
    reviews = resultDetails.reviews;
    priceText = resultDetails.priceText;
    developer = resultDetails.developer;
    genre = resultDetails.genre;
    icon = resultDetails.icon;
    sentiment = resultDetails.rating_calculated;
    reviewsArray = resultDetails.reviewsArray;
  } catch (error) {
    console.log(error);
    return response.status(500).send(error);
  }

  var noOfReviews = 10000;
  if (reviews < 10000) {
    noOfReviews = reviews;
  }

  for (var i in reviewsArray) {
    var rating = reviewsArray[i].rating;
    var polarity = reviewsArray[i].polarity;

    switch (rating) {
      case "5":
        fiveStars++;
        break;
      case "4":
        fourStars++;
        break;
      case "3":
        threeStars++;
        break;
      case "2":
        twoStars++;
        break;
      case "1":
        oneStar++;
        break;
    }

    switch (polarity) {
      case "positive":
        postive++;
        break;
      case "neutral":
        neutral++;
        break;
      case "negative":
        negative++;
        break;
    }
  }

  // finding the percentages
  postive = ((postive / noOfReviews) * 100).toFixed(1);
  neutral = ((neutral / noOfReviews) * 100).toFixed(1);
  negative = ((negative / noOfReviews) * 100).toFixed(1);
  fiveStars = ((fiveStars / noOfReviews) * 100).toFixed(1);
  fourStars = ((fourStars / noOfReviews) * 100).toFixed(1);
  threeStars = ((threeStars / noOfReviews) * 100).toFixed(1);
  twoStars = ((twoStars / noOfReviews) * 100).toFixed(1);
  oneStar = ((oneStar / noOfReviews) * 100).toFixed(1);

  detailsArray.push({
    // Push them into the array
    title,
    summary,
    installs,
    scoreText,
    reviews,
    priceText,
    developer,
    genre,
    icon,
    sentiment,
    postive,
    neutral,
    negative,
    fiveStars,
    fourStars,
    threeStars,
    twoStars,
    oneStar,
  });

  return response.status(200).send(detailsArray);
};
