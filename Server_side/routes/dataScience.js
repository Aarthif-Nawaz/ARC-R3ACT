/* 
This file retrieves invokes the python file to start the data science section of this project.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express
*/

// importing express JS module and assign it to a variable
var express = require("express");
var router = express.Router();
// assign child_process.spawn method from child_process module
// to a variable
var spawn = require("child_process").spawn;

// import sys module in the python file

router.get("/", (request, response) => {

  // parameters passed in spawn
  // 1. type of script
  // 2. path of the script and arguments for the script
  const process = spawn("python", ["hello.py"]);

  let result = "Result: \n";

  // store the data received from executing the script
  // and save it to the response object
  process.stdout.on("data", (data) => {
    result += data.toString();
  });

  // in close event, ensuring that the stream from 
  // child process is closed
  process.on("close", (code) => {
    response.send(result);
  });

  process.stderr.on("data", (data) => {
    console.error(`Error: ${data}`);
  });
});
module.exports = router;
