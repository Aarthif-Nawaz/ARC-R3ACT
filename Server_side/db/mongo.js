/**
 * @file Handles mongodb Atlas connection with node.js server.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires MongoClient
 * @requires mongodb
 */

const MongoClient = require("mongodb").MongoClient;

// Connecting the application to the cluster using mongoDB's native drivers
const uri =
  "mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority"||process.env.MONGODB_URI;
var client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { client };
