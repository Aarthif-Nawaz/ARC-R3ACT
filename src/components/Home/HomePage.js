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
              <p
              style={{fontSize:"1.25vw", color:"#fff",paddingTop:110,fontWeight:700}}>Explore</p>
              <Row>
                
                <button className="scrollArrow" onClick={handleOnClick} style={{backgroundColor:"transparent", border:"none"}}>
                  <img
                    alt="Arrow Down Icon"
                    src={process.env.PUBLIC_URL + "/images/arrowDown.png"}
                    style={{width:80, height:35}}
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
