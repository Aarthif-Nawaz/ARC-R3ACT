/* 
This file handles all the API to and from mongodb database.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express
*/

const express = require("express");
const router = express.Router();
const Review = require("../models/review");
const MongoClient = require("mongodb").MongoClient;

// {
// 	"userName": "User",
// 	"date": "PyMongo 101-A6",
// 	"text": "User",
// 	"version": "1001.21.32"
// }

var collection;
const uri =
  "mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  if (err) {
    console.log("Error has occured while connecting to database: ", err);
  }
  collection = client.db("Safiyyah_ARC").collection("Reviews");
  console.log("Connected to database.");
  // client.close();
});

router.get("/a", async (request, response) => {

    collection.find().toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    });
});

// GET
// router.get("/", async (req, res) => {
//     try{
//         let reviews = await Review.find()
//         .sort({date: "desc"})
//         return res.send(reviews);
//     }catch(e){
//         return res.status(500).send(e.message);
//     }
// });

// // GET with params
// router.get("/:reviewId", async (req, res) => {
//     let review = await Review.findById(req.params.reviewId);

//     if (!review) {
//         return res.status(404).send("The given Id does not exist.");
//     }
//     res.send(review);
// });

// // POST
// router.post("/", async (req, res) => {
//     validation
//     if (!req.body.userName || !req.body.date || !req.body.text || !req.body.version) {
//         return res.status(400).send("Required values are not set.");
//     }

//     try {
//         // db.collection('reviews').insertMany(req.body.my_reviews, function(err, reviews){
//         //     if(err) console.log(err);
//         //     else res.send("restaurants Added Successfully");
//         // });

//         let review = new Review ({
//             userName: req.body.userName,
//             date: req.body.date,
//             text: req.body.text,
//             version: req.body.version,
//         });

//         review = await review.save();
//         return res.send("Successfully added!");
//     } catch(e) {
//         return res.status(500).send(e.message);
//     }

// });

// // PUT
// router.put("/:reviewId", async (req, res) => {
//     let review = await Review.findById(req.params.reviewId);

//     // validation
//     if (!review) {
//         return res.status(404).send("The given Id does not exist.");
//     }

//     if (!req.body.userName || !req.body.date || !req.body.text || !req.body.version) {
//         return res.status(400).send("Required values are not set.");
//     }

//     try {
//         review.userName = req.body.userName;
//         review.date = req.body.date;
//         review.text = req.body.text;
//         review.version = req.body.version;

//         review = await review.save();
//         return res.send("Successfully updated!");
//     } catch(e) {
//         return res.status(500).send(e.message);
//     }
// });

// // DELETE
// router.delete("/:reviewId", async (req, res) => {
//     let reviewDelete = await Review.findOneAndDelete({_id : req.params.reviewId});

//     // validation
//     if (!reviewDelete) {
//         return res.status(404).send("The given Id does not exist.");
//     }

//     res.send("Successfully Deleted!");
// });

module.exports = router;
