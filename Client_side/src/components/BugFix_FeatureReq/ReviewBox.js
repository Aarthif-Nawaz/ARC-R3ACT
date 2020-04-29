/* 
  Page        - DescripBox.js page
  Function    - Description component for bug fix page, feature request
  Parameter   - @param {*} props
  Author      - Sajani Sihara, Ridmi Amasha
*/

import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function ReviewBox(props) {
  return (
    <div className="container-fluid">
      <div className="center-content">
        <div className="row m-1">
         

          <div className="col">
          <div class="sidenav">
            <a href="#">Navigation</a>
            <a href="#">Services</a>
            <a href="#">Code</a>
            <a href="#">Contact</a>
            <a href="#">Location</a>
            <a href="#">Loading</a>
            <a href="#">Map</a>
            <a href="#">Routes</a>
            <a href="#">Navigation</a>
            <a href="#">Services</a>
            <a href="#">Code</a>
            <a href="#">Contact</a>
            <a href="#">Location</a>
            <a href="#">Loading</a>
            <a href="#">Map</a>
            <a href="#">Routes</a>
            
          </div>
            <div className="container mb-4 border-bottom border-secondary main">
              <row>
                <h3>Sajani Sihara</h3>

                <p style={{ fontSize: "1.3rem" }} className="mr-3">
                  3.2
                  <FontAwesomeIcon icon={faStar} style={{ width: "2vw" }} />
                </p>
              </row>
              <p className="mb-3" style={{ fontSize: "1.3rem" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <p style={{ fontSize: "1.3rem" }}>10/05/2020</p>
              <Button
                variant="secondary"
                id="DescripBtn"
                className={"mx-2 DescripBtn"}
              >
                View Full Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewBox;
