/**
 * @file Handles all the functions related storing reviews of the app into the database.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires google-play-scraper
 */

var gplay = require("google-play-scraper");
var reviewsService = require("../services/reviews.service");
var datascienceController = require("../controllers/datascience.controller");

/**
 * Retrieves the details of the app using the scraper and
 * store the details into the database.
 */
exports.storeReviews = async function (titleParam, request, response) {
  var noOfReviews = 10000; // The number of review to be retrieved from the database
  var reviewArray = []; // An array to hold all the reviews of the app
  gplay
    .reviews({
      appId: request.params.appId, // App id entered by the user
      sort: gplay.sort.NEWEST,
      num: noOfReviews,
      lang: "en",
    })
    .then((result) => {
      var index = 0;
      for (var i in result) {
        index++; // Iterating the value to be stored as the review id
        var _id = index.toString();
        var userName = result[i].userName;
        var date = result[i].date;
        var text = result[i].text;
        var version = result[i].version;
        var rating = result[i].scoreText;
        var thumbsUp = result[i].thumbsUp;
        reviewArray.push({
          _id,
          userName,
          date,
          text,
          version,
          rating,
          thumbsUp,
        });
      }

      try {
        // Add reviews to the database
        reviewsService.addReviews(request.params.appId, reviewArray);
        // Call connectDatascience method to initialize data science proessing
        return datascienceController.connectDatascience(
          titleParam,
          request,
          response
        );
      } catch (error) {
        return response.status(500).send(error);
      }
    });
};
