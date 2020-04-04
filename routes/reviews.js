/* 
This file retrieves reviews using google-play-scraper and saves them to the database.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express, google-play-scraper
*/

var express = require("express");
var router = express.Router();
var gplay = require("google-play-scraper");
const client = require("./mongo").client;

var db;

client.connect(err => {
  if (err) {
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("arc");
  console.log("Connected to database - reviews");
  // client.close();
});

// retrieve reviews of the app entered by the user
router.get("/:appId", (request, response) => {
  db.collection("MobileAppReviews").removeMany({}, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
  });

  var numOfReviews = 10000;
  var reviewArray = [];
  gplay
    .reviews({
      appId: request.params.appId,
      sort: gplay.sort.NEWEST,
      num: numOfReviews,
      lang: "en"
    })
    //   .then(console.log, console.log);
    .then(result => {
      var index=0;
      for (var i in result) {
        index++;
        var _id=index.toString();
        var userName = result[i].userName;
        var date = result[i].date;
        var text = result[i].text;
        var version = result[i].version;
        var rating = result[i].scoreText;
        var thumbsUp = result[i].thumbsUp;
        reviewArray.push({ _id,userName, date, text, version, rating, thumbsUp });
      }
      response.send(reviewArray);
      
      db.collection("MobileAppReviews").insertMany(
        reviewArray,
        (error, result) => {
          if (error) {
            return response.status(500).send(error);
          }
        }
      );
    });
});

module.exports = router;
