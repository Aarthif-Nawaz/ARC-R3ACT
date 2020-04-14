
var express = require("express");
var router = express.Router();
const client = require("./mongo").client;
var tcom = require('thesaurus-com');
var db;

client.connect(err => {
    if (err) {
        console.log("Error has occured while connecting to database: ", err);
    }
    db = client.db("Safiyyah_ARC");
    console.log("Connected to database - keywords");
    // client.close();
});
// GET
router.get("/bugfix", (req, res) => {
    console.log("Accessed");
});

router.get("/bugfixes", (request, response) => {
    console.log("Entered0");
    db.collection("BugFixes").find().sort({ sentiment_score: 1 }).toArray((err, result) => {
        if (err) {
            return response.status(500).send("error");
        } else {
            bugFixes = [];
            for (let index = 0; index < result.length; index++) {
                if (result[index].keyword != "") {
                    bugFixes.push(result[index]);
                }
            }
            response.send(bugFixes);
        }
    });

});
router.get("/bugfixes/:keyword", async (request, response) => {
    console.log("Entered0");
    db.collection("BugFixes").findOne({ keyword: request.params.keyword }, async (err, result) => {
        if (err) {
            return response.status(500).send("error");
        } else {
            bugFixes = [];
            reviewIDs = result.reviewIDs;
            for (let index = 0; index < reviewIDs.length; index++) {
                var review = await db.collection("Reviews").findOne({ _id: reviewIDs[index] });
                bugFixes.push(review);
            }
            response.send(bugFixes);

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