/**
 * @file Consists of all the CRUD operations needed for the bugfixes.controller and featurereqs.controller files.
 *
 * @author Safiyyah Thur Rahman - 2018025
 * @requires mongodb
 */

const client = require("../db/mongo").client;

var db;
client.connect((err) => {
  if (err) {
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("ARC");
  console.log("Connected to database - bug fixes");
  // client.close();
});

/**
 * Retrieves all the reviews and the bugfixes of the app from the database.
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