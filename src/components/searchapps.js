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
              src={process.env.PUBLIC_URL + "/images/bgvideo.mp4"}
              type="video/mp4"
            />
          </video>
          <div className="content">
            <p>We analyse mobile app reviews.</p>
        
            <div className="searchBar">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search for a mobile app"
                  aria-label="search for a mobile app"
                  className="searchPlaceholder"
                />
                <InputGroup.Append>
                  <Button className="button" variant="outline-secondary">SEARCH</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div>
              <a className="scrollArrow" href="#section2"><img alt="Arrow Down Icon" src={process.env.PUBLIC_URL + "/images/arrowDown.jpg"}></a>
            </div>
            
          </div>
        </div>
     
  );
}

export default SearchApps;
