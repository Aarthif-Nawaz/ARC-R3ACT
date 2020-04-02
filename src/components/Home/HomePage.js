import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchApps from "./searchapps";
import About from "./About";

function HomePage() {
  /*Scroll down to the next div */
  const divToFocus = useRef(null);
  function handleOnClick() {
    if (divToFocus.current) {
      divToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row>
        <Container fluid className="introBox">
          <Container fluid className="video-container">
            <video className="videoBg" autoPlay loop muted>
              <source
                src={process.env.PUBLIC_URL + "/images/bgvideo.mp4"}
                type="video/mp4"
              />
            </video>

            <div className="content">
              <SearchApps />
              <Row>
                <button className="scrollArrow" onClick={handleOnClick}>
                  <img
                    alt="Arrow Down Icon"
                    src={process.env.PUBLIC_URL + "/images/arrowDown.png"}
                  />
                </button>
              </Row>
            </div>
          </Container>
        </Container>
      </Row>
      <Row ref={divToFocus}>
        <About />
      </Row>
    </Container>
  );
}
export default HomePage;
