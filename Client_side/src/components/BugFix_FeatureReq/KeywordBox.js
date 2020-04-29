/* 
  Page        - DescripBox.js page
  Function    - Description component for bug fix page, feature request
  Parameter   - @param {*} props
  Author      - Sajani Sihara, Ridmi Amasha
*/

import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

function KeywordBox(props) {
  return (
    <div className="container-fluid">
      <div className="center-content">
        <div className="row m-1">
          <div className="col">
            <div variant="secondary" className="KeywordBtn">
              Navigation
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
export default KeywordBox;
