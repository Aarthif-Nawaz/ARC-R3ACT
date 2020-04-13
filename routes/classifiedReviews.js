/* 
This file retrieves bug fixes, feature requests of the app from the database.
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
