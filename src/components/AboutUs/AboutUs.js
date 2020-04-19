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
              paddingLeft: "16.6vw",
              paddingRight: "16.6vw",
              paddingBlockStart: 30,
              textAlign: "justify",
            }}
          >
            As young software engineers stepping out into the world with fresh
            wild eyes, we are motivated to provide the best environment for
            mobile application developers to connect with their customers. In an
            exponentially advancing world, it is rather bizarre how the
            opinions of more than 70% of app users go unaddressed. To bridge this
            lack of communication, we present to you - ARC. An innovative
            project utilising data science to keep track of the latest data and
            help mobile application developers move one step closer to their end
            goal - satisfying their customers and creating a business
            potential.
          </p>
        </div>
      </div>

      <div class="bgimg-9">
        <div class="caption">
          <span class="border">MEET THE MEMBERS OF TEAM R3ACT</span>
        </div>
      </div>

      <div className="descrip-7">
        <div class="row">
          <div class="columnTeam">
            <div class="cardTeam">
              <div className="imageContainer">
                <div className="imageTeam"></div>
              </div>
              <div class="containerTeam">
                <h3 className="nameTeam">Safiyyah Rahman</h3>
                <a href="https://github.com/SafiyyahR" className="githubLinks">
                  <p style={{fontSize:"1vw"}}>github : SafiyyahR</p>
                </a>
              </div>
            </div>
          </div>

          <div class="columnTeam">
            <div class="cardTeam">
              <div className="imageContainer">
                <div className="imageTeam1"></div>
              </div>
              <div class="containerTeam">
                <h3 className="nameTeam">Christina Thambirajah</h3>
                <a
                  href="https://github.com/chrisitina-thambirajah"
                  className="githubLinks"
                >
                  <p style={{fontSize:"1vw"}}>github : chrisitina-thambirajah</p>
                </a>
              </div>
            </div>
          </div>

          <div class="columnTeam">
            <div class="cardTeam">
              <div className="imageContainer">
                <div className="imageTeam2"></div>
              </div>
              <div class="containerTeam">
                <h3 className="nameTeam">Sajani Sihara</h3>
                <a
                  href="https://github.com/sajani-sihara"
                  className="githubLinks"
                >
                  <p style={{fontSize:"1vw"}}>github : sajani-sihara</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row" style={{ paddingTop: 40 }}>

          <div class="columnTeam">
          <div class="cardTeam">
            <div className="imageContainer">
              <div className="imageTeam3"></div>
            </div>
            <div class="containerTeam">
              <h3 className="nameTeam">Ridmi Amasha</h3>
              <a href="https://github.com/ridmi98" className="githubLinks">
                <p style={{fontSize:"1vw"}}>github : ridmi98</p>
              </a>
            </div>
            </div>
          </div>

          <div class="columnTeam">
          <div class="cardTeam">
            <div className="imageContainer">
              <div className="imageTeam4"></div>
            </div>
            <div class="containerTeam">
              <h3 className="nameTeam">Aarthif Nawaz</h3>
              <a
                href="https://github.com/Aarthif-Nawaz"
                className="githubLinks"
              >
                <p style={{fontSize:"1vw"}}>github : Aarthif-Nawaz</p>
              </a>
            </div>
          </div>
          </div>

          <div class="columnTeam">
            <div class="cardTeam">
              <div className="imageContainer">
                <div className="imageTeam5"></div>
              </div>
              <div class="containerTeam">
                <h3 className="nameTeam">Shiromi Thevarajan</h3>
                <a
                  href="https://github.com/shiromi-basil"
                  className="githubLinks"
                >
                  <p style={{fontSize:"1vw"}}>github : shiromi-basil</p>
                </a>
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
