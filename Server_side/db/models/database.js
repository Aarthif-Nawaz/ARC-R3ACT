/**
 * @file Handles the RESTful API models using mongoDB.
 *
 * @author Shiromi Thevarajan - 2018117
 * @requires express
 * @requires mongodb
 */

const express = require("express");
const router = express.Router();
const client = require("./../mongo").client;
const ObjectID = require("mongodb").ObjectID;

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
  console.log("Connected to database - api");
  // client.close();
});

/**
 * HTTP requests to GET data from the database.
 *
 * @param {IncomingMessage} request The message that is sent by a client to a server.
 * @param {ServerResponse} response The response that the server sends when it gets an HTTP request.
 * @returns {ServerResponse} The result received by executing the mongodb query.
 */
router.get("/", (request, response) => {
  db.collection("Reviews")
    .find({})
    .toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      return response.send(result);
    });
});

/**
 * HTTP requests to GET data with parameters from the database.
 *
 * @param {IncomingMessage} request The message that is sent by a client to a server.
 * @param {ServerResponse} response The response that the server sends when it gets an HTTP request.
 * @returns {ServerResponse} The result received by executing the mongodb query.
 */
router.get("/:id", (request, response) => {
  db.collection("Reviews").findOne(
    { _id: new ObjectID(request.params.id) },
    (error, result) => {
      if (error) {
        return response.status(500).send({ message: "The given ID does not exist." });
      }
      return response.send(result);
    }
  );
});

/**
 * HTTP requests to POST data to the database.
 *
 * @param {IncomingMessage} request The message that is sent by a client to a server.
 * @param {ServerResponse} response The response that the server sends when it gets an HTTP request.
 * @returns {ServerResponse} The result received by executing the mongodb query.
 */
router.post("/", (request, response) => {
  db.collection("Reviews").insertOne(request.body, (error, result) => {
    if (error) {
      console.log(error);
      return response.status(500).send(error);
    }
    return response.send(result);
  });
});

/**
 * HTTP requests to POST several objects to the database.
 *
 * @param {IncomingMessage} request The message that is sent by a client to a server.
 * @param {ServerResponse} response The response that the server sends when it gets an HTTP request.
 * @returns {ServerResponse} The result received by executing the mongodb query.
 */
router.post("/many", (request, response) => {
  db.collection("Reviews").insertMany(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    return response.send(result);
  });
});

/**
 * HTTP requests to PUT data in the database.
 *
 * @param {IncomingMessage} request The message that is sent by a client to a server.
 * @param {ServerResponse} response The response that the server sends when it gets an HTTP request.
 * @returns {ServerResponse} The result received by executing the mongodb query.
 */
router.put("/:id", (request, response) => {
  db.collection("Reviews").updateOne(
    { _id: new ObjectID(request.params.id) },
    {
      $set: { appName: request.body.appName, userName: request.body.userName },
    },
    { upsert: true },
    (error, result) => {
      if (error) {
        return response.status(500).send({ message: "The given ID does not exist." });
      }
      return response.send(result);
    }
  );
});

/**
 * HTTP requests to DELETE data from the database.
 *
 * @param {IncomingMessage} request The message that is sent by a client to a server.
 * @param {ServerResponse} response The response that the server sends when it gets an HTTP request.
 * @returns {ServerResponse} The result received by executing the mongodb query.
 */
router.delete("/:id", (request, response) => {
  db.collection("Reviews").deleteOne(
    { _id: new ObjectID(request.params.id) },
    (error, result) => {
      if (error) {
        return response.status(500).send({ message: "The given ID does not exist." });
      }
      return response.send(result);
    }
  );
});

module.exports = router;
