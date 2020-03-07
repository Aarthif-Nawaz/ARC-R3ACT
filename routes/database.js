const express = require("express");
const router = express.Router();
const Review = require("../models/review")

// GET
router.get("/", async (req, res) => {
    try{
        let reviews = await Review.find()
        .sort({userName: "asc"})
        return res.send(reviews);
    }catch(e){
        return res.status(500).send(e.message);
    }
});

// GET with params
router.get("/:reviewId", async (req, res) => {
    let review = await Review.findById(req.params.reviewId);

    if (!review) {
        return res.status(404).send("The given Id does not exist.");
    }
    res.send(review);
});

// POST
router.post("/", async (req, res) => {
    // validation
    if (!req.body.userName || !req.body.text) {
        return res.status(400).send("Required values are not set.");
    }

    try {
        let review = new Avenger ({
            userName: req.body.userName,
            date: req.body.date,
            text: req.body.text,
            version: req.body.version,
        });

        review = await review.save();
        return res.send(review);
    } catch(e) {
        return res.status(500).send(e.message);
    }
});

// PUT
router.put("/:avengerId", async (req, res) => {
    let avenger = await Avenger.findById(req.params.avengerId);

    // validation
    if (!avenger) {
        return res.status(404).send("The given Id does not exist.");
    }

    if (!req.body.birthname) {
        return res.status(400).send("Required values are not set.");
    }

    avenger.birthname = req.body.birthname;
    avenger = await avenger.save(); 
    
});

// DELETE
router.delete("/:avengerId", async (req, res) => {
    let avengerDelete = await Avenger.findOneAndDelete({_id : req.params.avengerId});

    // validation
    if (!avengerDelete) {
        return res.status(404).send("The given Id does not exist.");
    }

    let indexOfAvenger = avengerArray.indexOf(avenger);
    avengerArray.splice(indexOfAvenger, 1);

    res.send("Successfully Deleted!");
});

module.exports = router;
