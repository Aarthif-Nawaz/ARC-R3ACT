/**
 * @file Consists of all the CRUD operations needed for the contactus.controller file.
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
  console.log("Connected to database - contact us");
  // client.close();
});

/**
 * Saves the information from the contact us webpage to the database.
 *
 * @param {string} data The information entered by the user in the contact us page.
 * @returns {void}
 */
exports.addMessage = async function (data) {
  try {
    await db.collection("ContactUs").insertOne(data);
  } catch (error) {
    console.log(error + " Error occured while adding message.");
  }
};
