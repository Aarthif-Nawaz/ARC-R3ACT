/**
 * @file Handles all the functions related to connecting the 
 * datascience section of the back-end with node.js server.
 *
 * @author Shiromi Thevarajan - 2018117
 */

// assign child_process.spawn method from child_process module
// to a variable
var spawn = require("child_process").spawn;
var datascienceService = require("../services/datascience.service");
// import sys module in the python file

/**
 * Invokes the datascience section of the back-end to start processing the reviews.
 */
exports.connectDatascience = async function (titleParam,request, response) {
  // parameters passed in spawn
  // 1. type of script
  // 2. path of the script and arguments for the script
  //"com.android.chrome"
  console.log("Hello");
  const process = spawn("python", ["../Data_Science/PlayStoreAppReviewClassifier.py", request.params.appId, titleParam.toLowerCase()]);
  let result = "Python Result: ";

  // store the data received from executing the script
  // and save it to the response object
  process.stdout.on("data", (data) => {
    result += data.toString();    
  });
  // // in close event, ensuring that the stream from
  // // child process is closed
  // process.on("close", (code) => {
  //   console.log(result);
  //   return response.send(result);
  // });

  process.stderr.on("data", (data) => {
    console.error(`Error: ${data}`);
  });

  try {
    // Delete the app details from the CurrentApplication collection
    datascienceService.deleteFromCurrentApps({appId: request.params.appId });
    return response.send(result);
  } catch (error) {
    return response.status(500).send(error);
  }
};
