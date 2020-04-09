import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../NavigationBar/Footer";

function AboutUs() {
  return (
    <Container fluid style={{ boxSizing: "border-box" }}>
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
            letterSpacing: 3,
            fontFamily: "Lato",
            fontSize: "2.3vw",
          }}
        >
          “We believe that we are on the face of the earth to make great
          products and that’s not changing.”
        </h2>

        <div className="descrip-6">
          <p
            style={{
              paddingLeft: 250,
              paddingRight: 250,
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

      <div class="bgimg-8">
        <div class="caption">
          <span
            class="border"
            style={{
              backgroundColor: "#282e34",
              fontSize: "2vw",
              color: "#f7f7f7",
            }}
          >
            Through strategy, design, content, and technology...
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
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
          <p
            style={{
              paddingLeft: 250,
              paddingRight: 250,
              paddingBlockStart: 30,
              textAlign: "justify",
            }}
          >
            As young software engineers stepping out into the world with fresh
            wild eyes, we are motivated to provide the best environment for
            mobile application developers to connect with their customers. In an
            exponenetially advancing world, it is rather bizarre how the
            opinions of more than 70% of app users go unaddressed. To bridg this
            lack of communication, we present to you - ARC. An innovative
            project utilising data science to keep track of the latest data and
            help mobile application developers move one step closer to their end
            goal - satfisfying their customers and creating a business
            potential.
          </p>
        </div>
      </div>

      <div class="bgimg-9">
        <div class="caption">
          <span class="border">we help developers improve their products.</span>
        </div>
      </div>

      <div className="descrip-1">
        <h3 style={{ textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>
          MEET THE MEMBERS OF TEAM R3ACT
        </h3>
        <div class="row" style={{ paddingTop: 50 }}>
          <div class="columnTeam">
            <div class="cardTeam">
              <img
                alt="Safiyyah"
                src={process.env.PUBLIC_URL + "/images/safiyyah.jpg"}
                style={{ width: "50%", paddingTop: 20, paddingBottom: 20 }}
              />
              <div class="containerTeam">
                <h3>Safiyyah Rahman</h3>
                <p>example@example.com</p>
              </div>
            </div>
          </div>
          <div class="columnTeam">
            <div class="cardTeam">
              <img
                alt="Christina"
                src={process.env.PUBLIC_URL + "/images/christina.jpg"}
                style={{ width: "50%", paddingTop: 20, paddingBottom: 20 }}
              />
              <div class="containerTeam">
                <h3>Chrstina Thambirajah</h3>
                <p>example@example.com</p>
              </div>
            </div>
          </div>
          <div class="columnTeam">
            <div class="cardTeam">
              <img
                alt="Shiromi"
                src={process.env.PUBLIC_URL + "/images/shiromi.jpg"}
                style={{ width: "50%", paddingTop: 20, paddingBottom: 20 }}
              />
              <div class="containerTeam">
                <h3>Shiromi Thevarajan</h3>
                <p>example@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style={{ paddingTop: 50 }}>
          <div class="columnTeam">
            <div class="cardTeam">
              <img
                alt="Ridmi"
                src={process.env.PUBLIC_URL + "/images/safiyyah.jpg"}
                style={{ width: "50%", paddingTop: 20, paddingBottom: 20 }}
              />
              <div class="containerTeam">
                <h3>Ridmi Amasha</h3>
                <p>example@example.com</p>
              </div>
            </div>
          </div>
          <div class="columnTeam">
            <div class="cardTeam">
              <img
                alt="Aarthif"
                src={process.env.PUBLIC_URL + "/images/aarthif.jpg"}
                style={{ width: "50%", paddingTop: 20, paddingBottom: 20 }}
              />
              <div class="containerTeam">
                <h3>Aarthif Nawaz</h3>
                <p>example@example.com</p>
              </div>
            </div>
          </div>
          <div class="columnTeam">
            <div class="cardTeam">
              <img
                alt="Sajani"
                src={process.env.PUBLIC_URL + "/images/sajani.jpg"}
                style={{ width: "50%", paddingTop: 20, paddingBottom: 20 }}
              />
              <div class="containerTeam">
                <h3>Sajani Sihara</h3>
                <p>example@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
export default AboutUs;
