/* 
  Page        - LoadingBox.js page
  Function    - This is the loading page that shows up when time is taken to retrieve data using the APIs
  Author      - Sajani Sihara
*/

import React from "react";

function LoadingBox() {
  return (
    <div className="container-fluid video-container">
      {/*the background of this page is a video */}
      <video id="loadingvideo" autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + "/images/loadingVideo.mp4"}
          type="video/mp4"
        />
      </video>

      <div className="container-fluid loadingContainer">
        {/*Adding main heading with animation */}
        <div className="loader" style={{ position: "absolute", top: "20vw" }}>
          <span>Analysing...</span>
        </div>

        {/*Adding sub text that will change every 30 seconds */}
        <div style={{ position: "absolute", top: "40vw" }}>
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
      </div>
    </div>
  );
}
export default LoadingBox;
