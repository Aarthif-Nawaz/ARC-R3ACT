/* 
This file handles all the search related methods.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express, google-play-scraper
*/

const express = require("express");
const router = express.Router();
var gplay = require("google-play-scraper");

// display apps similar to the app name entered by the user
router.get("/:name", (request, response) => {
  var numOfApps = 5;
  var appArray = [];
  gplay
    .search({
      term: request.params.name,
      num: numOfApps,
      fullDetail: true
    })
    // .then(console.log, console.log);
    .then(result => {
      if (result === undefined || result.length == 0) {
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
            price
          });
        }
        response.send(appArray);
      }
    });
});

// suggest app names similar to the app name entered by the user
router.get("/suggest/:name", (request, response) => {
  var appArray = [];
  gplay
    .suggest({
      term: request.params.name
    })
    // .then(console.log);
    .then(result => {
      if (result === undefined || result.length == 0) {
        response.send("No results for " + request.params.name);
      } else {
          appArray.push(result);
        }
        response.send(appArray);
      }
    );
});

module.exports = router;
