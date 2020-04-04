import React from "react";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <Container fluid>
      <div className="descrip-1">
        <h3 style={{ textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>
          Application Review Classifier
        </h3>
        <p
          style={{ paddingLeft: 250, paddingRight: 250, paddingBlockStart: 30 }}
        >
          ARC analyses user reviews from the Google Play Store and suggests bug
          fixes, feature requests and the overall sentiment of a mobile
          application. Join ARC today to address problems regarding your apps
          and improve your customer experience. analyses user reviews from the
          Google Play Store and suggests bug fixes, feature requests and the
          overall sentiment of a mobile application.
        </p>
      </div>

      <div class="bgimg-1">
        <div class="caption">
          <span class="border">
            We provide app review & ratings analysis for mobile teams.
          </span>
        </div>
      </div>

      <div className="descrip-1">
        <h3 style={{ textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>
          How to use ARC?
        </h3>
        <p
          style={{
            paddingLeft: 250,
            paddingRight: 250,
            paddingBlockStart: 30,
            textAlign: "justify",
          }}
        >
          You can see all the postive and negative reviews regarding your app
          using ARC. All you have to do to start the process is type the name of
          the mobile application in the search bar at the top of this page. Once
          the app has been selected, click on Search. Give our servers a moment
          to analyse the thousands of reviews submitted to Google Play Store
          regarding that app. Once the analysis is over, you will be lead to a
          menu where you can choose from three options - bug fixes, feature
          requests and overall sentiment.
        </p>
      </div>

      <div class="bgimg-2">
        <div class="caption">
          <span
            class="border"
            style={{
              backgroundColor: "#282e34",
              fontSize: "2vw",
              color: "#f7f7f7",
            }}
          >
            App review analysis in minutes, not days…
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="descrip-2">
          <div class="rowCard">
            <div class="columnCard">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 20 }}>
                  Bug Fixes
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                  }}
                >
                  Mobile app users will leave reviews regarding all the bugs
                  they encounter during their application experience. When ARC
                  anaylses the reviews, the reviews addressing big fixes will be
                  captured and displayed in a seperate page. You can analyse
                  them and easily identify what bug fixes are mentioned the most
                  and address the situation by implementing a solution to the
                  bug.
                </p>
              </div>
            </div>
            <div class="columnCard">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 20 }}>
                  Feature Requests
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                  }}
                >
                  Mobile app users will leave reviews regarding all the features
                  they wish to have during their application experience. When
                  ARC anaylses the reviews, the reviews addressing feature
                  requests will be captured and displayed in a seperate page.
                  You can analyse them and easily identify what features are
                  requested the most and address the situation by implementing
                  those features.
                </p>
              </div>
            </div>
            <div class="columnCard">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 20 }}>
                  Overall Sentiment
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                  }}
                >
                  Mobile app users leave reviews about their mobile application
                  experience in the Google Play Store. These reviews can either
                  be positive or negative depending on their experience. ARC
                  analyses all the reviews available for the application and
                  uses cutting edge technology and sentiment analysis to
                  calculate the overall sentiment of the mobile application. It
                  will show whether the app has a positive or negative outlook
                  for your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bgimg-3">
        <div class="caption">
          <span
            class="border"
            style={{
              backgroundColor: "#282e34",
              fontSize: "2vw",
              color: "#f7f7f7",
            }}
          >
            …without losing sight of the big picture!
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="descrip-3">
          <h3 style={{ textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>
            Make better and faster decisions
          </h3>
          <p
            style={{
              paddingLeft: 250,
              paddingRight: 250,
              paddingBlockStart: 30,
            }}
          >
            ARC provides fully automated, easy-to-understand sentiment analysis
            for mobile app reviews. Measure trends in user sentiment, review
            volume and star rating over time so you can see what users think of
            changes you make to your apps. See what app store reviews are about
            without lifting a finger. Make better, faster decisions about your
            product roadmap, based on the feedback and sentiment of real users.
          </p>
        </div>
      </div>

      <div class="bgimg-1">
        <div class="caption">
          <span class="border">Unlock your data right now with ARC!</span>
        </div>
      </div>

      <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">Application Review Classifier</h5>
              <p>
                Your one stop for real time application review analysis.
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3">
              <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Home</a>
                  </li>
                  <li>
                    <a href="#!">About</a>
                  </li>
                  <li>
                    <a href="#!">Contact</a>
                  </li>
                  <li>
                    <a href="#!">Support</a>
                  </li>
                </ul>
              </div>
            </hr>
          </div>

          <div class="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="!#"> applicationreviewclassifier.com</a>
          </div>
        </div>
      </footer>
    </Container>
  );
}
export default About;
