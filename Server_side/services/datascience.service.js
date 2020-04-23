/**
 * @file Consists of all the CRUD operations needed for the datascience.controller file.
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
  console.log("Connected to database - data science"); // If Successfully Connected to the database
  // client.close();
});

/**
 * Deletes all details of the app after proessing the reviews from the database.
 *
 * @param {string} query The app id of the app selected by the user.
 * @returns {void}
 */
exports.deleteFromCurrentApps = async function (query) {
  try {
    await db.collection("CurrentApplications").deleteOne(query);
  } catch (error) {
    console.log(error + " Error occured while deleting current app details.");
  }
};
