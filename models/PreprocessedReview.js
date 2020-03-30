/* 

Dependencies: mongoose
*/

const mongoose = require("mongoose");

const preProcessedReviewSchema = new mongoose.Schema({ 
    _id:String,
    userName:String,
    date: String,
    text: String,
    version: String,
    lexicon_preprocessed: String,
    svr_preprocessed:String,
    lexicon_sentiment: Number,
    svr_sentiment: Number,
    polarity: String,
    cluster: String,
    keywords: {
        type: [String],
        required: false,
    }
});

const PreprocessedReview = mongoose.model("feature_requests", reviewSchema);

module.exports = PreprocessedReview;