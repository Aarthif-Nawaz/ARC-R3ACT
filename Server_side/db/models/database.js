/* 
This file handles all the Restful API using mongoDB.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express, mongodb
*/

const express = require("express");
const router = express.Router();
const client = require("./../mongo").client;
const ObjectID = require('mongodb').ObjectID;

var db;

client.connect(err => {
  if (err) {
    console.log("Error has occured while connecting to database: ", err);
  }
  db = client.db("ARC");
  console.log("Connected to database - api");
  // client.close();
});

// GET
router.get("/", (request, response) => {
  db.collection("Reviews")
    .find({})
    .toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    });
});

// GET with params
router.get("/:id", (request, response) => {
  db.collection("Reviews").findOne(
    { _id: new ObjectID(request.params.id) },
    (error, result) => {
      if (error) {
        return response.status(500).send("The given Id does not exist.");
      }
      response.send(result);
    }
  );
});

// POST
router.post("/", (request, response) => {
  db.collection("Reviews").insertOne(request.body, (error, result) => {
    if (error) {
      console.log(error);
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

// POST with many objects
router.post("/many", (request, response) => {
  db.collection("Reviews").insertMany(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

// PUT
router.put("/:id", (request, response) => {
  db.collection("Reviews").updateOne(
    { _id: new ObjectID(request.params.id) },
    { $set: { appName: request.body.appName, userName: request.body.userName } },
    { upsert: true },
    (error, result) => {
      if (error) {
        return response.status(500).send("The given Id does not exist.");
      }
      response.send(result);
    }
  );
});

// DELETE
router.delete("/:id", (request, response) => {
  db.collection("Reviews").deleteOne(
    { _id: new ObjectID(request.params.id) },
    (error, result) => {
      if (error) {
        return response.status(500).send("The given Id does not exist.");
      }
      response.send(result);
    }
  );
});

module.exports = router;
