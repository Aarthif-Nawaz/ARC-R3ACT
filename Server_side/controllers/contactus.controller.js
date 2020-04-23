/**
 * @file Handles all the functions related to the contact us webpage.
 *
 * @author Shiromi Thevarajan - 2018117
 */

var contactusService = require("../services/contactus.service");

/**
 * Accepts the message from the contact us webpage and store into the database.
 */
exports.storeMessage = async function (request, response) {
  // Storing the information in the request body to a variable
  var message = request.body;

  try {
    contactusService.addMessage(message);
    return response.status(200).send("Succesfully Added!");
  } catch (error) {
    return response.status(500).send(error);
  }
};
