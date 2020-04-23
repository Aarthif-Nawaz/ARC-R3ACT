/**
 * @file Consists of all the CRUD operations needed for the contactus.controller file.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires mongodb
 */

const client = require("../db/mongo").client;

var db;
client.connect((err) => {
  if (err) {
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("ARC");
  console.log("Connected to database - contact us");
  // client.close();
});

/**
 * Saves the information from the contacr us webpage to the database.
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
