import React from "react";
//import { css } from "@emotion/core";
import Container from "react-bootstrap/Container";
//import Col from "react-bootstrap/Col";
//import DotLoader from "react-spinners/DotLoader";

/**
 * added #root to the home css in App.css
 * commented out the div in App.js
 * Spinner refering 'https://www.npmjs.com/package/react-spinners'
 */
function LoadingBox() {
  
  return (
   <Container fluid className="video-container">
    <video className="videoBg" autoPlay loop muted>
      <source
        src={process.env.PUBLIC_URL + "/images/loadingVideo.mp4"}
        type="video/mp4"
      />
    </video>
    <Container fluid className="loadingContainer">
      <div class="loader" style={{position:"absolute", top:"20vw"}}>
        <span>Analysing...</span>
      </div>
      <div style={{position:"absolute", top:"40vw"}}>
      <p
          style={{
            textTransform: "uppercase",
            letterSpacing: 3,
            fontSize: "1.4vw",
            textAlign: "center",
            color: "#000",
            fontWeight: 600,
          }}
        >
          {" "}
         <span className="loadingText"></span> 
        </p>
        </div>
        </Container>
    </Container>
  );
}
export default LoadingBox;
