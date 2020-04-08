/* 
This file retrieves bug fixes, feature requests and the overall sentiment of the app from the database.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express, mongodb
*/

// Required modules for the extraction of appDetails
var express = require("express");
var router = express.Router();
const client = require("./mongo").client;

var db;

client.connect((err) => {
  if (err) {
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("Safiyyah_ARC");
  console.log("Connected to database - classified");
  // client.close();
});

// retrieve overall sentiment and other relevant details of the app entered by the user
router.get("/sentiment", async (request, response) => {
  var detailsArray = [];

  var title;
  var summary;
  var installs;
  var scoreText;
  var reviews;
  var priceText;
  var developer;
  var genre;
  var icon;
  var sentiment;

  await db.collection("MobileApplicationDetails").findOne(
    { _id: "1" },
    (error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      title = result.title;
      summary = result.summary;
      installs = result.installs;
      scoreText = result.scoreText;
      reviews = result.reviews;
      priceText = result.priceText;
      developer = result.developer;
      genre = result.genre;
      icon = result.icon;
      sentiment = result.rating_calculated;
      
    }
  );

  var noOfReviews = 10000;
  if (reviews < 10000) {
    noOfReviews = reviews;
  }

  var postive = 0;
  var neutral = 0;
  var negative = 0;
  var oneStar = 0;
  var twoStars = 0;
  var threeStars = 0;
  var fourStars = 0;
  var fiveStars = 0;

  await db.collection("Reviews")
    .find({})
    .toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      for (var i in result) {
        var rating = result[i].rating;
        var polarity = result[i].polarity;

        switch (rating) {
          case "5":
            fiveStars++;
            break;
          case "4":
            fourStars++;
            break;
          case "3":
            threeStars++;
            break;
          case "2":
            twoStars++;
            break;
          case "1":
            oneStar++;
            break;
        }

        switch (polarity) {
          case "positive":
            postive++;
            break;
          case "neutral":
            neutral++;
            break;
          case "negative":
            negative++;
            break;
        }
      }

      // finding the percentages
      postive = ((postive / noOfReviews) * 100).toFixed(1);
      neutral = ((neutral / noOfReviews) * 100).toFixed(1);
      negative = ((negative / noOfReviews) * 100).toFixed(1);
      fiveStars = ((fiveStars / noOfReviews) * 100).toFixed(1);
      fourStars = ((fourStars / noOfReviews) * 100).toFixed(1);
      threeStars = ((threeStars / noOfReviews) * 100).toFixed(1);
      twoStars = ((twoStars / noOfReviews) * 100).toFixed(1);
      oneStar = ((oneStar / noOfReviews) * 100).toFixed(1);

      detailsArray.push({
        // Push them into the array
        title,
        summary,
        installs,
        scoreText,
        reviews,
        priceText,
        developer,
        genre,
        icon,
        sentiment,
        postive,
        neutral,
        negative,
        fiveStars,
        fourStars,
        threeStars,
        twoStars,
        oneStar,
      });

      response.send(detailsArray);
    });
});

// retrieve complete reviews from the database
router.get("/:id", (request, response) => {
  db.collection("Reviews").findOne(
    { _id: new ObjectID(request.params.id) },
    (error, result) => {
      if (error) {
        return response.status(500).send("The given Id does not exist.");
      }
      response.send(result);
    }
  );
});

module.exports = router;
