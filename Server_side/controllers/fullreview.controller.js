/**
 * @file Handles all the function related to displaying
 * the complete review.
 *
 * @author Shiromi Thevarajan - 2018117
 */

var fullreviewService = require("../services/fullreview.service");

/**
 * Retrieves and displays the complete review related
 * to bug fixes or feature requests from the database.
 */
exports.completeReview = async function (request, response) {
  var completeReview = [];
  var detailsResult = [];

  try {
    detailsResult = await fullreviewService.getDetails({
      appId: request.params.appId,
    });

    // Store all the reviews of the app into an array
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

    // Displaying an error message if the review id does not exist
    return response.send("Invalid review id!");
  } catch (error) {
    return response.status(500).send(error);
  }
};
