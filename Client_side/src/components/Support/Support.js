/* 
  Page      - Support.js page
  Function  - Provides information regarding ARC such as FAQs
  Author    - Sajani Sihara
*/

import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../NavigationBar/Footer";
import { Helmet } from "react-helmet";

const TITLE = "Support | ARC";
function Support() {
  return (
    <Container fluid style={{ boxSizing: "border-box" }}>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="icon" href="images/logo1.png" sizes="16x16"></link>
      </Helmet>
      <div className="bgimg-10">
        <div className="caption">
          <span className="border">
            Know more about Application Review Classifier.
          </span>
        </div>
      </div>

      <div>
        <h2
          style={{
            textAlign: "center",
            fontWeight: 700,
            paddingLeft: "23.3vw",
            paddingRight: "23.3vw",
            paddingTop: "6.6vw",
            paddingBottom: "3.3vw",
            letterSpacing: "0.2vw",
            fontFamily: "Lato",
            fontSize: "2.3vw",
          }}
        >
          Through strategy, design, content and technology, we aim to help
          mobile application developers improve their products.
        </h2>

        <div className="descrip-6">
          <p
            style={{
              paddingLeft: "16.6vw",
              paddingRight: "16.6vw",
            }}
          >
            We believe that truly impactful applications inspire their audiences
            to action, to dream, to change; they leave an impression on their
            audiences and wield genuine influence. Helping developers to create
            apps like this is our passion, it’s what brought us together, and
            it’s what keeps us moving forward.
          </p>
        </div>
      </div>

      <div className="bgimg-11">
        <div className="caption">
          <span
            className="border"
            style={{
              backgroundColor: "#282e34",
              fontSize: "2vw",
              color: "#f7f7f7",
            }}
          >
            Here are some frequently asked questions about ARC.
          </span>
        </div>
      </div>
      <div className="descrip-8">
        <div className="FAQsection">
          <h3 style={{ fontWeight: "700", letterSpacing: 1 }}>
            1. What are the key functions of ARC?
          </h3>
          <p>
            ARC is web application, which extracts all the reviews of an app and
            analyses them to give you a report with the reviews classified to
            Bug Fixes and Feature Requests. It also analyses the reviews to find
            the Overall sentiment of the app.
          </p>
        </div>
        <div className="FAQsection">
          <h3 style={{ fontWeight: "700", letterSpacing: 1 }}>
            2. What is a bug fix?
          </h3>
          <p>
            A bug fix is a category of review where the user of the app mentions
            an issue with the app that requires repair.
          </p>
        </div>
        <div className="FAQsection">
          <h3 style={{ fontWeight: "700", letterSpacing: 1 }}>
            3. What is a feature request?
          </h3>
          <p>
            A feature request is a category of review where the user of the app
            mentions areas of the app that need improvement.
          </p>
        </div>
        <div className="FAQsection">
          <h3 style={{ fontWeight: "700", letterSpacing: 1 }}>
            4. What is a sentiment score?
          </h3>
          <p>
            The sentiment score is a score ranging from 0 to 100% that analyses
            the reviews alone to find the sentiment the user has regarding the
            app.
          </p>
        </div>
        <div className="FAQsection">
          <h3 style={{ fontWeight: "700", letterSpacing: 1 }}>
            5. Which app stores does ARC get reviews from?
          </h3>
          <p>ARC works with reviews extracted from the Google Play Store.</p>
        </div>
        <div className="FAQsection">
          <h3 style={{ fontWeight: "700", letterSpacing: 1 }}>
            6. Why is an app I am searching for not available?
          </h3>
          <p>
            An app may not be eligible for analysis if it has less than 100
            reviews. So if an app is on Google Play Store but not available,
            this may be the reason.
          </p>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
export default Support;
