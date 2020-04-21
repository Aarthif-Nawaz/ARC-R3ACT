/* 
This file saves information from the contact us page of the website to the database.
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

// save information from the contact us page to the database
exports.addMessage = async function (data) {
  try {
    db.collection("ContactUs").insertOne(data);
  } catch (error) {
    console.log(error + " Error occured while adding message.");
  }
};
