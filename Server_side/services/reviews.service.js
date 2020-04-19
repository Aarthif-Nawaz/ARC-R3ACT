/* 
This file retrieves reviews using google-play-scraper and saves them to the database.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express, google-play-scraper
*/

const client = require("../db/mongo").client;

var db;
// Check the MongoDB Database Connection
client.connect((err) => {
  if (err) {
    // If there is an error in the Connection Log out the error
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("ARC"); // Get the name of the Database and store it onto the db variable
  console.log("Connected to database - reviews"); // If Successfully Connected to the database
  // client.close();
});

exports.deleteReviews = async function (query) {
  try {
    db.collection("Reviews").removeMany(query);
  } catch (error) {
    console.log(error + " Error occured while deleting reviews.");
  }
};

exports.addReviews = async function (data) {
  try {
    db.collection("Reviews").insertMany(data);
  } catch (error) {
    console.log(error + " Error occured while adding reviews.");
  }
};
