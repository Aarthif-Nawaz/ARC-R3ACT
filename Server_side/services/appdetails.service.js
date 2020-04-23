/**
 * @file Consists of all the CRUD operations needed for the appdetails.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires mongodb
 */

const client = require("../db/mongo").client;

/**
 * Connects to the mongodb Atlas database.
 */
var db;
client.connect((err) => {
  if (err) {
    // Displaying error message if an error occurs while connecting to the database
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("ARC"); // Store the name of the database in a variable
  // Displaying success message if the database connection is successful
  console.log("Connected to database - app");
  // client.close();
});

/**
 * Deletes all the details of the app from the database.
 *
 * @param {string} query The app id of the app selected by the user.
 * @returns {void}
 */
exports.deleteDetails = async function (query) {
  try {
    db.collection("MobileApplications").deleteMany(query);
  } catch (error) {
    console.log(error + " Error occured while deleting app details.");
  }
};

/**
 * Saves all the details of the app to the database.
 *
 * @param {string} data The details of the app selected by the user.
 * @returns {void}
 */
exports.addDetails = async function (data) {
  try {
    await db.collection("MobileApplications").insertMany(data);
  } catch (error) {
    console.log(error + " Error occured while adding app details.");
  }
};

/**
 * Retrieves all the app details from the database.
 *
 * @param {string} query Specifies selection filter using query operators.
 * @returns {array} The arrat holding the results of the find query.
 */
exports.getDetails = async function (query) {
  try {
    var result = await db.collection("MobileApplications").findOne(query);
    return result;
  } catch (error) {
    console.log(error + " Error occured while retrieving app details.");
  }
};

/**
 * Retrieves app id and title of all the apps in the CurrentApplications collection from the database.
 *
 * @param {string} query Specifies selection filter using query operators.
 * @returns {array} The arrat holding the results of the find query.
 */
exports.getFromCurrentApps = async function (query) {
  try {
    var result =
      (await db
        .collection("CurrentApplications")
        .find(query)
        .limit(1)
        .count()) > 0;
    return result;
  } catch (error) {
    console.log(error + " Error occured while retrieving current app details.");
  }
};

/**
 * Saves the app id and the title of the app selected by the user to the CurrentApplications collection.
 * @param {string} data The app id and the app title of the app selected by the user.
 * @returns {void}
 */
exports.addToCurrentApps = async function (data) {
  try {
    await db.collection("CurrentApplications").insertMany(data);
  } catch (error) {
    console.log(error + " Error occured while adding current app details.");
  }
};
