var express = require("express");
var router = express.Router();
var contactusService = require("../services/contactus.service");

// retrieve reviews of the app entered by the user
exports.storeMessage = async function (request, response) {
  // Validate request parameters, queries using express-validator
  var message = request.body;

  try {
    contactusService.addMessage(message);
    return response.status(200).send("Succesfully Added!");
  } catch (error) {
    return response.status(500).send(error);
  }
};