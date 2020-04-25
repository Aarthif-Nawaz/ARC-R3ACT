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
  var processAgain = false;
  try {
    var booleanResult = await appdetailsService.getFromCurrentApps({
      appId: request.params.appId,
    });
  } catch (error) {
    return response.status(500).send(error);
  }

  if (booleanResult) {
    return response.status(200).send({ wait: true });
  } else {
    var detailsResult = await appdetailsService.getDetails({
      appId: request.params.appId,
    });
    if (detailsResult != null) {
      // Store the data and time data was stored into the database
      var timestamp = new Date(detailsResult.date_uploaded);

      // Store the current data and time into a variable
      var currenTime = new Date();

      var timeDif = diff_minutes(timestamp, currenTime);

      if (timeDif < 20) {
        return response.status(200).send(detailsResult);
      } else {
        // Start processging the reviews again if the
        // time difference is greater than 20
        processAgain = true;
      }
    } else {
      processAgain = true;
    }

    if (processAgain) {
      // Initializing detailsArray to store all the app details
      var detailsArray = [];
      var currentDetailsArray = [];
      var appId;
      var title;
      // Using the play scraper module get all the app details
      gplay
        .app({
          appId: request.params.appId, // App id of the app selected by the user
        }).catch(async (error) =>{
          return response.status(500).send({message:error.toString()});
        })
        //   .then(console.log, console.log);
        .then(async (result) => {
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
              await appdetailsService.deleteDetails({
                appId: request.params.appId,
              });
              // Add the app title and id to the CurrentApplication collection
              await appdetailsService.addToCurrentApps(currentDetailsArray);
              // Add the new app details to the database
              await appdetailsService.addDetails(detailsArray);
              // Call storeReviews method to add reviews to the database
              await reviewsController.storeReviews(title, request, response);
            } catch (error) {
              return response.send(error);
            }
          } else {
            // If the review count is less than 100,
            // send this error message to the client
            console.log("Sorry! The number of reviews is less than 100.");
            response.send({
              message: "Sorry! The number of reviews is less than 100.",
            });
          }
        }).then(() => { return response.status(200).send({ wait: true }) });


    }
  }
};

/**
 * Calculates the time difference between the two date objects
 *
 * @param {Date} dt2 The date object to be compared
 * @param {Date} dt1 The date object to be compared
 * @returns The time difference between the data objects in minutes
 */
function diff_minutes(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}
