/*
Author: Aarthif Nawaz
Purpose : This is the backend Skeleton to extract reviews from appDetails and store it onto mongodb
IIT ID: 2017313

Dependencies: express, mongodb, google-play-scraper
*/
 
// Required modules for the extraction of appDetails
var express = require("express");
var router = express.Router();
var gplay = require("google-play-scraper");
const client = require("./mongo").client;

var db;
// Check the MongoDB Database Connection
client.connect(err => {
  if (err) { // If there is an error in the Connection Log out the error
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("ARC"); // Get the name of the Database and store it onto the db variable
  console.log("Connected to database - app"); // If Successfully Connected to the database
  // client.close();
});
// retrieve reviews of the app entered by the user
router.get("/:appId", (request, response) => { // Using the router module to get the request of the call from the frontend
  db.collection("MobileApplicationDetails").deleteMany({}, (error, result) => { // Remove all the past mobileAppDetails and only store the current
    if (error) {
      return response.status(500).send(error);
    }
  });

  // Create a new detailsArray to store all the mobileAppDetails
  var detailsArray = [];
  // Using the play scraper module get all the appDetails
  gplay
    .app({
      appId: request.params.appId // App ID
    })
    //   .then(console.log, console.log);
    .then(result => { // Get the result and using a variable called "result" , get all the other details
      var _id="1"; 
      var appId=request.params.appId;
      var title = result.title;
      var summary = result.summary;
      var installs = result.installs;
      var reviews = result.reviews;
      var priceText = result.priceText;
      var developer = result.developer;
      var genre = result.genre;
      var icon = result.icon;
      detailsArray.push({ // Push them into the array
        _id,
        appId,
        title,
        summary,
        installs,
        reviews,
        priceText,
        developer,
        genre,
        icon
      });

      if (reviews > 100) { // Check if the review Count is greater > 100
        response.send(detailsArray); // Send the detailsArray back as a response to the Server
        
        // Access the DB collection and insert the records
        db.collection("MobileApplicationDetails").insertMany(
          detailsArray,
          (error, result) => {
            if (error) { // If it is unsuccessful , report the server timeout error into the web browser
              return response.status(500).send(error);
            }
          }
        );
      } else {
        response.send( // If it not Send this mesaage to the Server
          "Sorry! The number of reviews of the selected app is not greater than 100."
        );
      }
    });
});
//Export this router , so that it can be used by other js files in the directory
module.exports = router;
