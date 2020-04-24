/* 
  Page      - HomePage.js page
  Function  - Shows the first screen of the ARC website
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchApps from "./searchapps";
import About from "./About";
import Footer from "../NavigationBar/Footer";

function HomePage() {
  /*Scroll down to the next div */
  const divToFocus = useRef(null);
  function handleOnClick() {
    if (divToFocus.current) {
      divToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <div className="row">
        {/*the background of this page is a video */}
        <div className="conatiner-fluid introBox">
          <div className="conatiner-fluid video-container">
            <video id="homeVideo" autoPlay loop muted>
              <source
                src={process.env.PUBLIC_URL + "/images/bgvideo.mp4"}
                type="video/mp4"
              />
            </video>

            {/*adding the search bar component */}
            <div className="content">
              <SearchApps />

              {/*adding the explore text */}
              <p
                style={{
                  fontSize: "1.25vw",
                  color: "#fff",
                  paddingTop: "7.3vw",
                  fontWeight: 700,
                }}
              >
                Explore
              </p>

              {/*adding a down arrow. upon clicking it, it will move to About.js */}
              <div className="row">
                <button
                  className="scrollArrow"
                  onClick={handleOnClick}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <img
                    alt="Arrow Down Icon"
                    src={process.env.PUBLIC_URL + "/images/arrowDown.png"}
                    style={{ width: "5.3vw", height: "2.3vw" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" ref={divToFocus}>
        <About />
      </div>

      {/*adding the footer component */}
      <Footer />
    </div>
  );
}
export default HomePage;
