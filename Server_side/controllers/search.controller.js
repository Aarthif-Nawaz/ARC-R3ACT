/**
 * @file Manages all the search related functions.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires google-play-scraper
 */

var gplay = require("google-play-scraper");

/**
 * Retrieves and display the apps with names similar
 * to the name entered by the user.
 */
exports.searchApp = async function (request, response) {
  var numOfApps = 5; // The number of similar apps to be displayed
  var appArray = []; // An array to hold all the details of the similar apps
  gplay
    .search({
      term: request.params.name, // App id entered by the user
      num: numOfApps,
      fullDetail: true,
    })
    .then((result) => {
      // Checking if the result from the scraper is empty
      if (result === undefined || result.length == 0) {
        // Displaying en error message if the app id is invalid
        response.send("No results for " + request.params.name);
      } else {
        for (var i in result) {
          var title = result[i].title;
          var appId = result[i].appId;
          var developer = result[i].developer;
          var icon = result[i].icon;
          var summary = result[i].summary;
          var installs = result[i].installs;
          var rating = result[i].scoreText;
          var price = result[i].priceText;
          appArray.push({
            title,
            appId,
            developer,
            icon,
            summary,
            installs,
            rating,
            price,
          });
        }
        return response.send(appArray);
      }
    });
};
