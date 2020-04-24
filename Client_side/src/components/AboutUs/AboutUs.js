/* 
  Page      - AboutUs.js page
  Function  - Provides information regarding ARC and the team members
  Author    - Sajani Sihara
*/

import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../NavigationBar/Footer";

function AboutUs() {
  return (
    <Container fluid style={{ boxSizing: "border-box" }}>
      {/*Adding the background image*/}
      <div className="bgimg-7">
        {/*Adding the main heading */}
        <div className="caption">
          <span className="border">
            Helping mobile application developers move forward.
          </span>
        </div>
      </div>

      <div>
        {/*Adding a quote about vision of ARC*/}
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
          “We believe that we are on the face of the earth to make great
          products and that’s not changing.”
        </h2>
        {/*Adding a div that will hold the intro para */}
        <div className="descrip-6">
          <p
            style={{
              paddingLeft: "16.6vw",
              paddingRight: "16.6vw",
            }}
          >
            As the great Tim Cook once said, we believe the best brands tell
            stories, which is why we partner with our clients to create
            impactful work that not only represents their business, but also
            connects them with people emotionally. ARC provides mobile
            application developers with the opportunity to connect with their
            customers directly. This direct communication helps developers to
            address the problems faced by their customers.
          </p>
        </div>
      </div>

      {/*The second background image */}
      <div className="bgimg-8">
        {/*Adding text about the team */}
        <div className="caption">
          <span
            className="border"
            style={{
              backgroundColor: "#282e34",
              fontSize: "2vw",
              color: "#f7f7f7",
            }}
          >
            We are a team of driven and innovative individuals.
          </span>
        </div>
      </div>

      {/* Starting a new div that will hold the ARC goals */}
      <div style={{ position: "relative" }}>
        {/*Styling the text with dark blue background */}
        <div className="descrip-2">
          <h3
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: "2vw",
              fontWeight: 900,
            }}
          >
            our values and goals
          </h3>
          {/*Adding the text about ARC goals */}
          <p
            style={{
              paddingLeft: "16.6vw",
              paddingRight: "16.6vw",
              paddingBlockStart: 30,
              textAlign: "justify",
            }}
          >
            As young software engineers stepping out into the world with fresh
            wild eyes, we are motivated to provide the best environment for
            mobile application developers to connect with their customers. In an
            exponentially advancing world, it is rather bizarre how the opinions
            of more than 70% of app users go unaddressed. To bridge this lack of
            communication, we present to you - ARC. An innovative project
            utilising data science to keep track of the latest data and help
            mobile application developers move one step closer to their end goal
            - satisfying their customers and creating a business potential.
          </p>
        </div>
      </div>
      {/*The third background image */}
      <div className="bgimg-9">
        {/*Starting the new div meet the team */}
        <div className="caption">
          <span className="border">MEET THE MEMBERS OF TEAM R3ACT</span>
        </div>
      </div>
      {/*Styling the new div that will hold the info regarding the team members */}
      <div className="descrip-7">
        {/*First row will have Safiyyah, Christina and Sajani */}
        <div className="row">
          {/*Safiyyah Rahman Card */}
          <div className="columnTeam">
            {/*div for one card */}
            <div className="cardTeam">
              {/*div to hold the image */}
              <div className="imageContainer" style={{ padding: "2.85vw" }}>
                {/*the image is in a div container because on hover the image will change to show the team member's role */}
                <div className="imageTeam"></div>
              </div>
              {/*div to hold the name and github link */}
              <div className="containerTeam">
                <h3 className="nameTeam">Safiyyah Rahman</h3>
                <a href="https://github.com/SafiyyahR" className="githubLinks">
                  <p style={{ fontSize: "1vw" }}>github : SafiyyahR</p>
                </a>
              </div>
            </div>
          </div>

          {/*Christina Thambirajah Card */}
          <div className="columnTeam">
            {/*div for one card */}
            <div className="cardTeam">
              {/*div to hold the image */}
              <div className="imageContainer" style={{ padding: "2.85vw" }}>
                {/*the image is in a div container because on hover the image will change to show the team member's role */}
                <div className="imageTeam1"></div>
              </div>
              {/*div to hold the name and github link */}
              <div className="containerTeam">
                <h3 className="nameTeam" style={{ fontSize: "1vw" }}>
                  Christina Thambirajah
                </h3>
                <a
                  href="https://github.com/chrisitina-thambirajah"
                  className="githubLinks"
                >
                  <p style={{ fontSize: "1vw" }}>
                    github : chrisitina-thambirajah
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/*Sajani Sihara Card */}
          <div className="columnTeam">
            {/*div for one card */}
            <div className="cardTeam">
              {/*div to hold the image */}
              <div className="imageContainer" style={{ padding: "2.85vw" }}>
                {/*the image is in a div container because on hover the image will change to show the team member's role */}
                <div className="imageTeam2"></div>
              </div>
              {/*div to hold the name and github link */}
              <div className="containerTeam">
                <h3 className="nameTeam">Sajani Sihara</h3>
                <a
                  href="https://github.com/sajani-sihara"
                  className="githubLinks"
                >
                  <p style={{ fontSize: "1vw" }}>github : sajani-sihara</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Second row will contain info regarding Rdimi, Aarthif and Shiromi */}
        <div className="row" style={{ paddingTop: "1.3vw" }}>
          {/*Ridmi Amasha Card */}
          <div className="columnTeam">
            {/*div for one card */}
            <div className="cardTeam">
              {/*div to hold the image */}
              <div className="imageContainer" style={{ padding: "2.85vw" }}>
                {/*the image is in a div container because on hover the image will change to show the team member's role */}
                <div className="imageTeam3"></div>
              </div>
              {/*div to hold the name and github link */}
              <div className="containerTeam">
                <h3 className="nameTeam">Ridmi Amasha</h3>
                <a href="https://github.com/ridmi98" className="githubLinks">
                  <p style={{ fontSize: "1vw" }}>github : ridmi98</p>
                </a>
              </div>
            </div>
          </div>

          {/*Aarthif Nawaz Card */}
          <div className="columnTeam">
            {/*div for one card */}
            <div className="cardTeam">
              {/*div to hold the image */}
              <div className="imageContainer" style={{ padding: "2.85vw" }}>
                {/*the image is in a div container because on hover the image will change to show the team member's role */}
                <div className="imageTeam4"></div>
              </div>
              {/*div to hold the name and github link */}
              <div className="containerTeam">
                <h3 className="nameTeam">Aarthif Nawaz</h3>
                <a
                  href="https://github.com/Aarthif-Nawaz"
                  className="githubLinks"
                >
                  <p style={{ fontSize: "1vw" }}>github : Aarthif-Nawaz</p>
                </a>
              </div>
            </div>
          </div>

          {/*Shiromi Thevarajan Card */}
          <div className="columnTeam">
            {/*div for one card */}
            <div className="cardTeam">
              {/*div to hold the image */}
              <div className="imageContainer" style={{ padding: "2.85vw" }}>
                {/*the image is in a div container because on hover the image will change to show the team member's role */}
                <div className="imageTeam5"></div>
              </div>
              {/*div to hold the name and github link */}
              <div className="containerTeam">
                <h3 className="nameTeam">Shiromi Thevarajan</h3>
                <a
                  href="https://github.com/shiromi-basil"
                  className="githubLinks"
                >
                  <p style={{ fontSize: "1vw" }}>github : shiromi-basil</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Adding the footer component */}
      <Footer />
    </Container>
  );
}
export default AboutUs;
