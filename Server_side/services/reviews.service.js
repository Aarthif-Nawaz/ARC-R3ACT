/**
 * @file Consists of all the CRUD operations needed for the review.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires mongodb
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

/**
 * Saves all the reviews of the app to the database.
 *
 * @param {string} query The app id of the app entered by the user.
 * @param {string} data The reviews of the app entered by the user.
 * @returns {void}
 */
exports.addReviews = async function (query, data) {
  try {
    await db
      .collection("MobileApplications")
      .updateOne({ appId: query }, { $set: { reviewsArray: data } });
  } catch (error) {
    console.log(error + " Error occured while adding reviews.");
  }
};
