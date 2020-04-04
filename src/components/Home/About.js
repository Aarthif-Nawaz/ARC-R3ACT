import React from "react";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <Container fluid>
      <div className="descrip-1">
        <h3 style={{ textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>
          Application  Review  Classifier
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
        <h3 style={{ textAlign: "center" }}>How to use ARC?</h3>
        <p></p>
      </div>

      <div class="bgimg-2">
        <div class="caption">
          <span
            class="border"
            style={{
              backgroundColor: "transparent",
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
          <p>
            See what app store reviews are about without lifting a finger. Make
            better, faster decisions about your product roadmap, based on the
            feedback and sentiment of real users.
          </p>
        </div>
      </div>

      <div class="bgimg-3">
        <div class="caption">
          <span
            class="border"
            style={{
              backgroundColor: "transparent",
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
          <p>
            ARC provides fully automated, easy-to-understand sentiment analysis
            for mobile app reviews. Measure trends in user sentiment, review
            volume and star rating over time so you can see what users think of
            changes you make to your apps.
          </p>
        </div>
      </div>

      <div class="bgimg-1">
        <div class="caption">
          <span class="border">Unlock your data with ARC!</span>
        </div>
      </div>
    </Container>
  );
}
export default About;
