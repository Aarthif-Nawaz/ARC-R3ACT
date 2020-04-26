/**
 * @file Handles all the functions related to connecting the
 * datascience section of the back-end with node.js server.
 *
 * @author Shiromi Thevarajan - 2018117
 */

// Assign child_process.spawn method from
// child_process module to the variable
var spawn = require("child_process").spawn;
var datascienceService = require("../services/datascience.service");

/**
 * Invokes the datascience section of the back-end to start processing the reviews.
 */
var result = "";
exports.connectDatascience = async function (titleParam, request, response) {
  try {
    var return_value = await run(
      request.params.appId,
      titleParam.toLowerCase(),
      response
    );
    return return_value;
  } catch (e) {
    console.error(e.stack);
  }
};

/**
 * Executes the connection between the node server and python script
 */
async function run(appId, titleParam, response) {
  return new Promise((resolve, reject) => {
    console.log("Starting Data Science");

    // Parameters passed in spawn
    // 1. type of script
    // 2. path of the script and arguments for the script
    const process = spawn("python", [
      "../../Data_Science/PlayStoreAppReviewClassifier.py",
      appId,
      titleParam,
    ]);

    // Store the data received from executing the script
    // and send it as the response object
    process.stdout.on("data", async (data) => {
      result = data;
      console.log("result" + data.toString());
      try {
        // Delete the app details from the CurrentApplication collection
        await datascienceService.deleteFromCurrentApps({ appId: appId });
        return result;
      } catch (error) {
        return response.status(500).send(error);
      }
    });

    // Displaying an error message in case of
    // an error during the connection
    process.stderr.on("data", (data) => {
      console.log(data.toString());
    });
  });
}
