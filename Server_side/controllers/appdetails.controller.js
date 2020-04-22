var gplay = require("google-play-scraper");
var appdetailsService = require("../services/appdetails.service");
var reviewsController = require("../controllers/reviews.controller");

// retrieve reviews of the app entered by the user
exports.storeDetails = async function (request, response) {
  try {
    var booleanResult = await appdetailsService.getFromCurrentApps({
      appId: request.params.appId,
    });
  } catch (error) {
    return response.status(500).send(error);
  }

  if (booleanResult) {
    await waitUntilProcessed(request, response);

  } else {
    // Create a new detailsArray to store all the mobileAppDetails
    var detailsArray = [];
    var currentDetailsArray = [];
    var appId;
    var title;
    // Using the play scraper module get all the appDetails
    gplay
      .app({
        appId: request.params.appId, // App ID
      })
      //   .then(console.log, console.log);
      .then((result) => {
        // Get the result and using a variable called "result", get all the other details
        appId = request.params.appId;
        title = result.title;
        var summary = result.summary;
        var installs = result.installs;
        var reviews = result.reviews;
        var priceText = result.priceText;
        var developer = result.developer;
        var genre = result.genre;
        var icon = result.icon;
        detailsArray.push({
          // Push them into the array
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

        currentDetailsArray.push({
          // Push them into the array
          appId,
          title,
        });

        if (reviews > 100) {
          // Check if the review Count is greater > 100
          // Send the detailsArray back as a response to the Server

          try {
            // Delete the previously processed app details from the database
            appdetailsService.deleteDetails({ appId: request.params.appId });
            // Add the app title and id to the CurrentApplication collection
            appdetailsService.addToCurrentApps(currentDetailsArray);
            // Add the new app details to the database
            appdetailsService.addDetails(detailsArray);
            // Call the method to add reviews to the database
            return reviewsController.storeReviews(appId, title,request, response);
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
  }
};

async function waitUntilProcessed(request, response) {
  try {
    var detailsResult = appdetailsService.getDetails({
      appId: request.params.appId,
    });
    var processed = detailsResult.rating_calculated;
    if (!processed == null) {
      console.log("Processing completed!");
      return response
        .status(200)
        .send("Python Result: Data science process completed!!");
    } else {
      console.log("Processing please wait!");
      setTimeout(waitUntilProcessed, 60000, request, response);
    }
  } catch (error) {
    return response.status(500).send(error);
  }
}
