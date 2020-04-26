/**
 * @file Consists of all the CRUD operations needed for the fullreview.controller file.
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
  console.log("Connected to database - full review");
  // client.close();
});

/**
 * Retrieves the  complete review and the related details from the database.
 *
 * @param {string} query Specifies selection filter using query operators.
 * @returns {array} The arrat holding the results of the find query.
 */
exports.getDetails = async function (query) {
  try {
    var result = await db.collection("MobileApplications").findOne(query);
    return result;
  } catch (error) {
    console.log(error + " Error occured while retrieving complete review.");
  }
};
