/**
 * @file Consists of all the CRUD operations needed for the review.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires mongodb
 */

const client = require("../db/mongo").client;

/**
 * Connects to the mongodb Atlas database.
 */
var db;
client.connect((err,instance) => {
  if (err) {
    // Displaying error message if an error occurs while connecting to the database
    console.log("Error has occured while connecting to database: ", err);
  }
  db = instance.db("ARC"); // Store the name of the database in a variable
  // Displaying success message if the database connection is successful
  console.log("Connected to database - reviews");
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
    // Adding data into an existing document in the database.
    await db
      .collection("MobileApplications")
      .updateOne({ appId: query }, { $set: { reviewsArray: data } });
  } catch (error) {
    console.log(error + " Error occured while adding reviews.");
  }
};
