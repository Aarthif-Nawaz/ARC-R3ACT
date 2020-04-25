/* 
  Page      - About.js page
  Function  - General background info about ARC
  Author    - Sajani Sihara
*/

import React from "react";

function About() {
  return (
    <div>
      {/*Adding a div that will hold the intro para */}
      <div className="descrip-1">
        <h3 style={{ textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>
          Application Review Classifier
        </h3>
        <p
          style={{
            paddingLeft: "16.6vw",
            paddingRight: "16.6vw",
            paddingBlockStart: "2vw",
          }}
        >
          ARC analyses user reviews from the Google Play Store and suggests bug
          fixes, feature requests and the overall sentiment of a mobile
          application. Join ARC today to address problems regarding your apps
          and improve your customer experience. analyses user reviews from the
          Google Play Store and suggests bug fixes, feature requests and the
          overall sentiment of a mobile application.
        </p>
      </div>

      {/*Adding the background image*/}
      <div className="bgimg-1">
        {/*Adding the first heading */}
        <div className="caption">
          <span className="border">
            We provide app review & ratings analysis for mobile teams.
          </span>
        </div>
      </div>

      {/*Adding para about how to use ARC */}
      <div className="descrip-1">
        <h3 style={{ textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>
          How to use ARC?
        </h3>
        <p
          style={{
            paddingLeft: "16.6vw",
            paddingRight: "16.6vw",
            paddingBlockStart: "2vw",
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
      {/*The second background image */}
      <div className="bgimg-2">
        {/*Adding the second heading */}
        <div className="caption">
          <span
            className="border"
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
        {/*making a div to hold info about the classification categories */}
        <div className="descrip-2">
          <div className="row">
            {/*First column holds info regarding Bug Fixes */}
            <div className="col-4 d-flex align-items-stretch">
              <div className="card" style={{ marginLeft: "2vw" }}>
                <h3 style={{ fontSize:"2vw" ,fontWeight: 700, paddingBottom: "1.3vw" }}>
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

            {/*Second column holds info regarding Feature Requests */}
            <div className="col-4  d-flex align-items-stretch">
              <div className="card" style={{ marginLeft: "2vw" }}>
                <h3 style={{ fontSize:"2vw" ,fontWeight: 700, paddingBottom: "1.3vw" }}>
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

            {/*Third column holds info regarding Overall Sentiment */}
            <div className="col-4 d-flex align-items-stretch">
              <div className="card" style={{ marginLeft: "2vw" }}>
                <h3 style={{fontSize:"2vw" , fontWeight: 700, paddingBottom: "1.3vw" }}>
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

      {/*The third background image */}
      <div className="bgimg-3">
        {/*Adding the third heading */}
        <div className="caption">
          <span
            className="border"
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
        {/*adding a para about ARC's functionality */}
        <div className="descrip-3">
          <h3 style={{ textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>
            Make better and faster decisions
          </h3>
          <p
            style={{
              paddingLeft: "16.6vw",
              paddingRight: "16.6vw",
              paddingBlockStart: "2vw",
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

      {/*The fourth background image */}
      <div className="bgimg-4">
        {/*Adding the fourth heading */}
        <div className="caption">
          <span className="border">Unlock your data right now with ARC!</span>
        </div>
      </div>
    </div>
  );
}
export default About;
