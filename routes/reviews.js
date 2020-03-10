/* 
This file retrieves reviews using external API call and saves them to the database.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express, request
*/

var express = require('express');
var router = express.Router();
var request = require('request');

router.get("/:appName", async (req, res) => {
    request({
        uri: 'http://localhost:3000/api/apps/' + req.params.appName + '/reviews?num=1000',
    }).pipe(res);
});

// router.post("/:appName", async (req, res) => {
//     request({
//         uri: 'http://localhost:3000/api/apps/' + req.params.appName + '/reviews?num=10',
//     }).pipe(res);


//     // validation
//     if (!req.body.userName || !req.body.date || !req.body.text || !req.body.version) {
//         return res.status(400).send("Required values are not set.");
//     }

//     try {
//         let review = new Review ({
//             userName: req.body.userName,
//             date: req.body.date,
//             text: req.body.text,
//             version: req.body.version,
//         });

//         review = await review.save();
//         return res.write(review);
//     } catch(e) {
//         return res.status(500).send(e.message);
//     }
// });

module.exports = router;
