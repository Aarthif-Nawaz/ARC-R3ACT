/* 
This file saves information from the contact us page of the website to the database.
*/

// importing express JS module and assign it to a variable
var express = require("express");
var router = express.Router();
const client = require("./mongo").client;

var db;
client.connect((err) => {
  if (err) {
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("ARC");
  console.log("Connected to database - keywords");
  // client.close();
});

// save information from the contact us page to the database
router.post("/", (request, response) => {
  db.collection("ContactUs").insertOne(request.body, (error, result) => {
    if (error) {
      console.log(error);
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

module.exports = router;
