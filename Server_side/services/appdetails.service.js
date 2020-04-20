/*
Author: Aarthif Nawaz
Purpose : This is the backend Skeleton to extract reviews from appDetails and store it onto mongodb
IIT ID: 2017313

Dependencies: express, mongodb, google-play-scraper
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
  console.log("Connected to database - app"); // If Successfully Connected to the database
  // client.close();
});

exports.deleteDetails = async function (query) {
  try {
    db.collection("MobileApplications").deleteMany(query);
  } catch (error) {
    console.log(error + " Error occured while deleting app details.");
  }
};

exports.addDetails = async function (data) {
  try {
    db.collection("MobileApplications").insertMany(data);
  } catch (error) {
    console.log(error + " Error occured while adding app details.");
  }
};

exports.getFromCurrentApps = async function (query) {
  try {
    var result = await db.collection("CurrentApplications").find(query).limit(1).count() > 0;
    return result;
  } catch (error) {
    console.log(error + " Error occured while retrieving current app details.");
  }
};

exports.addToCurrentApps = async function (data) {
  try {
    db.collection("CurrentApplications").insertMany(data);
  } catch (error) {
    console.log(error + " Error occured while adding current app details.");
  }
};
