/* 
This file handles mongoDB Atlas connection.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: MongoClient
*/
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://User:1234@r3act-rludw.mongodb.net/Safiyyah_ARC?retryWrites=true&w=majority";

var client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = { client };
