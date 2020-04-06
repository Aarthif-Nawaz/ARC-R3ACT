/* 
This file retrieves invokes the python file to start the data science section of this project.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express
*/

// importing express JS module and assign it to a variable
var express = require("express");
var router = express.Router();

// import sys module in the python file

router.get("/", (request, response) => {
  // assign child_process.spawn method from child_process module
  // to a varible
  var spawn = require("child_process").spawn;

  // parameters passed in spawn
  // 1. type of script
  // 2. path of the script and arguments for the script
  var process = spawn('python', ["./hello.py"]);

  console.log("asd");

  // store the data received from executing the script
  // and save it to the response object
  process.stdout.on('data', (data) => {
    console.log("asd");
    console.log(`data:${data}`);
  });
});
module.exports = router;
