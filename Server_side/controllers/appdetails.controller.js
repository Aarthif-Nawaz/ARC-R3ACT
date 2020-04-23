/**
 * @file Backend skeleton to extract app details using the
 * scraper and store it onto the database.
 *
 * @author Aarthif Nawaz - 2017313
 * @requires google-play-scraper
 */

var gplay = require("google-play-scraper");
var appdetailsService = require("../services/appdetails.service");
var reviewsController = require("../controllers/reviews.controller");

/**
 * Retrieves the reviews of the app using the scraper and
 * store the reviews into the database.
 */
exports.storeDetails = async function (request, response) {
  try {
    var booleanResult = await appdetailsService.getFromCurrentApps({
      appId: request.params.appId,
    });
  } catch (error) {
    return response.status(500).send(error);
  }

  if (booleanResult) {
    // If the app id is available in the CurrentApplications collection
    try {
      // Wait until the reviews are processed
      await waitUntilProcessed(request, response);
    } catch (error) {
      return response.status(500).send(error);
    }
    await waitUntilProcessed(request, response);
  } else {
    // Initializing detailsArray to store all the app details
    var detailsArray = [];
    var currentDetailsArray = [];
    var appId;
    var title;
    // Using the play scraper module get all the app details
    gplay
      .app({
        appId: request.params.appId, // App id of the app selected by the user
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
          // If the review count is greater > 100,
          // Send the detailsArray back as a response to the Server

          try {
            // Delete the previously processed app details from the database
            appdetailsService.deleteDetails({ appId: request.params.appId });
            // Add the app title and id to the CurrentApplication collection
            appdetailsService.addToCurrentApps(currentDetailsArray);
            // Add the new app details to the database
            appdetailsService.addDetails(detailsArray);
            // Call storeReviews method to add reviews to the database
            return reviewsController.storeReviews(title, request, response);
          } catch (error) {
            return response.status(500).send(error);
          }
        } else {
          response.send(
            // If the review count is less than 100,
            // send this error message to the client
            "Sorry! The number of reviews is less than 100."
          );
        }
      });
  }
};

/**
 * Delay the callback function until the reviews are processed.
 */
async function waitUntilProcessed(request, response) {
  try {
    var detailsResult = appdetailsService.getDetails({
      appId: request.params.appId,
    });

    // Store the rating_calulated (sentiment) of the app into a variable
    var processed = detailsResult.rating_calculated;

    if (!processed == null) {
      // If the variable is not null, processing of the reviews is completed
      console.log("Processing completed!");
      return response
        .status(200)
        .send("Python Result: Data science process completed!!");
    } else {
      // If the variable is null, delay the application by 60 seconds
      // and run this function again
      console.log("Processing please wait!");
      setTimeout(waitUntilProcessed, 60000, request, response);
    }
  } catch (error) {
    return response.status(500).send(error);
  }
}
