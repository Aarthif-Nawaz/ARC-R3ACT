import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "../App.css";

function SearchApps() {
  return (
    <html>
      <head>
        <title>Search for Apps</title>
      </head>
      <body>
        <div class="video-container">
          <video className="videoBg" autoPlay loop muted>
            <source
              src={process.env.PUBLIC_URL + "/images/bgvideo.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </body>
    </html>
  );
}

export default SearchApps;
