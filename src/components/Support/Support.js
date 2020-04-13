import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../NavigationBar/Footer";

function Support() {
  return (
    <Container fluid style={{ boxSizing: "border-box" }}>
      <div class="bgimg-10">
        <div class="caption">
          <span className="border">
            Here are some frequently asked questions about ARC.
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
            We are a team of driven and innovative individuals.
          </span>
        </div>
      </div>

      

      <Footer />
    </Container>
  );
}
export default Support;
