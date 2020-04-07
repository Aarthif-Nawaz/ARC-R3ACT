import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../NavigationBar/Footer";

function AboutUs() {
  return (
    <Container fluid>
      <div class="bgimg-7">
        <div class="caption">
          <span className="border">
            Helping mobile application developers move forward.
          </span>
        </div>
      </div>

      <div>
        <h2
          style={{
            textAlign: "center",
            fontWeight: 700,
            paddingLeft: 350,
            paddingRight: 350,
            paddingTop: 100,
            paddingBottom: 50,
            fontFamily: "Lato",
          }}
        >
          “We believe that we are on the face of the earth to make great
          products and that’s not changing.”
        </h2>

        <div className="descrip-1">
          <p
            style={{
              paddingLeft: 250,
              paddingRight: 250,
              paddingBlockStart: 30,
            }}
          >
            As the great Tim Cook once said, we believe the best brands tell
            stories, which is why we partner with our clients to create
            impactful work that not only represents their business, but also
            connects them with people emotionally.
          </p>
        </div>
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
          <div class="row">
            <div class="col d-flex align-items-stretch">
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
            <div class="col d-flex align-items-stretch">
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
            <div class="col d-flex align-items-stretch">
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

      <div class="bgimg-4">
        <div class="caption">
          <span class="border">Unlock your data right now with ARC!</span>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
export default AboutUs;
