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

exports.deleteFromCurrentApps = async function (query) {
  try {
    await db.collection("CurrentApplications").deleteOne(query);
  } catch (error) {
    console.log(error + " Error occured while deleting current app details.");
  }
};
