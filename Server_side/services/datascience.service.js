/**
 * @file Consists of all the CRUD operations needed for the datascience.controller file.
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
  console.log("Connected to database - data science");
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
