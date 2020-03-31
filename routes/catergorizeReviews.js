
var express = require("express");
var router = express.Router();
const client = require("./mongo").client;
var db;

client.connect(err => {
    if (err) {
        console.log("Error has occured while connecting to database: ", err);
    }
    db = client.db("Safiyyah_ARC");
    console.log("Connected to Safiyyah_ARC.");
    // client.close();
});
// GET
router.get("/bugfix", (req, res) => {
    console.log("Accessed");
});

router.get("/bugfixes", (request, response) => {
    console.log("Entered0");
    db.collection("Reviews").find({ cluster: "Bug_fix" }).toArray((err, result) => {
        if (err) {
            return response.status(500).send("error");
        } else {
            response.send(result)
        }
    });

});
router.get("/featrequests", (request, response) => {
    console.log("Entered0");
    db.collection("Reviews").find({ cluster: "Feature Request" }).toArray((err, result) => {
        if (err) {
            return response.status(500).send("error");
        } else {
            response.send(result)
        }
    });

});

router.get("/common", (request, response) => {
    console.log("Entered0");
    db.collection("Reviews").find({ cluster: "Common" }).toArray((err, result) => {
        if (err) {
            return response.status(500).send("error");
        } else {
            response.send(result)
        }
    });

});


// }

module.exports = router;