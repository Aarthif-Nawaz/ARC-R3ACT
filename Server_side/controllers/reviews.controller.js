var gplay = require("google-play-scraper");
var reviewsService = require("../services/reviews.service");

// retrieve reviews of the app entered by the user
exports.storeReviews = async function (request, response) {
  // Using the router module to get the request of the call from the frontend
  try {
    await reviewsService.deleteReviews({});
  } catch (error) {
    return response.status(500).send(error);
  }

  var noOfReviews = 10000;
  var reviewArray = [];
  gplay
    .reviews({
      appId: request.params.appId,
      sort: gplay.sort.NEWEST,
      num: noOfReviews,
      lang: "en",
    })
    //   .then(console.log, console.log);
    .then((result) => {
      var index = 0;
      for (var i in result) {
        index++;
        var _id = index.toString();
        var userName = result[i].userName;
        var date = result[i].date;
        var text = result[i].text;
        var version = result[i].version;
        var rating = result[i].scoreText;
        var thumbsUp = result[i].thumbsUp;
        reviewArray.push({
          _id,
          userName,
          date,
          text,
          version,
          rating,
          thumbsUp,
        });
      }

      try {
        reviewsService.addReviews(reviewArray);
        return response.status(200).send(reviewArray);
      } catch (error) {
        return response.status(500).send(error);
      }
    });
};
