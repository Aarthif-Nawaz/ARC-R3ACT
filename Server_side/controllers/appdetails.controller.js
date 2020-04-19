var gplay = require("google-play-scraper");
var appdetailsService = require("../services/appdetails.service");
var reviewsController = require("../controllers/reviews.controller");

// retrieve reviews of the app entered by the user
exports.storeDetails = async function (request, response) {
  // Using the router module to get the request of the call from the frontend
  try {
    await appdetailsService.deleteDetails({});
  } catch (error) {
    return response.status(500).send(error);
  }

  // Create a new detailsArray to store all the mobileAppDetails
  var detailsArray = [];
  var appId
  // Using the play scraper module get all the appDetails
  gplay
    .app({
      appId: request.params.appId, // App ID
    })
    //   .then(console.log, console.log);
    .then((result) => {
      // Get the result and using a variable called "result", get all the other details
      var _id = "1";
      appId = request.params.appId;
      var title = result.title;
      var summary = result.summary;
      var installs = result.installs;
      var reviews = result.reviews;
      var priceText = result.priceText;
      var developer = result.developer;
      var genre = result.genre;
      var icon = result.icon;
      detailsArray.push({
        // Push them into the array
        _id,
        appId,
        title,
        summary,
        installs,
        reviews,
        priceText,
        developer,
        genre,
        icon,
      });

      if (reviews > 100) {
        // Check if the review Count is greater > 100
         // Send the detailsArray back as a response to the Server

        try {
          appdetailsService.addDetails(detailsArray);
          return reviewsController.storeReviews(appId, request, response);
        } catch (error) {
          return response.status(500).send(error);
        }
        // Access the DB collection and insert the records
      } else {
        response.send(
          // If it not Send this mesaage to the Server
          "Sorry! The number of reviews is less than 100."
        );
      }
    });
};
