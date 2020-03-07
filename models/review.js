const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({ 
    userName: {  // schema validations
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    date: String,
    text: String,
    version: Number
});

const Review = mongoose.model("feature_request", reviewSchema);

module.exports = Review;