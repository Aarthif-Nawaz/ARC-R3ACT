import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "../App.css";

function SearchApps() {
  return (
        <div className="video-container">
          <video className="videoBg" autoPlay loop muted>
            <source
              src={process.env.PUBLIC_URL + "/images/bgvideo2.mp4"}
              type="video/mp4"
            />
          </video>
          <div className="content">
            <p>We analyse mobile app reviews.</p>
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search for a mobile app"
                  aria-label="search for a mobile app"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">SEARCH</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
        </div>
     
  );
}

export default SearchApps;
