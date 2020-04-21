var gplay = require("google-play-scraper");
var reviewsService = require("../services/reviews.service");
var datascienceController = require("../controllers/datascience.controller");

// retrieve reviews of the app entered by the user
exports.storeReviews = async function (appIdParam, request, response) {
  // Using the router module to get the request of the call from the frontend
  var noOfReviews = 10;
  var reviewArray = [];
  gplay
    .reviews({
      appId: appIdParam,
      sort: gplay.sort.NEWEST,
      num: noOfReviews,
      lang: "en",
    })
    //   .then(console.log, console.log);
    .then((result) => {
      var index = 0;
      for (var i in result) {
        index++;
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
        reviewsService.addReviews(appIdParam, reviewArray);
        // Call the method to initialize data science proessing
        return datascienceController.connectDatascience(appIdParam, request, response);
      } catch (error) {
        return response.status(500).send(error);
      }
    });
};
