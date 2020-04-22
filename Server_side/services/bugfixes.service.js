const client = require("../db/mongo").client;

var db;
client.connect((err) => {
  if (err) {
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("Safiyyah_ARC");
  console.log("Connected to database - bug fixes");
  // client.close();
});

exports.getDetails = async function (query) {
  try {
    var result = await db.collection("MobileApplications").findOne(query);
    return result;
  } catch (error) {
    console.log(error + " Error occured while retrieving app details.");
  }
};