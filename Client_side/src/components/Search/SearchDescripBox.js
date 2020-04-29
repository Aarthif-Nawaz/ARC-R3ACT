/* 
  Page      - SearchDescripBox.js page
  Function  - Displays each value of the props
  Parameter - @param {*} props
  Author    - Sajani Sihara, Christina Thambirajah
*/

import React from "react";

function SearchDescripBox(props) {
  return (
    <div className="searchBox">
      <div className="row">
        <div className="col-6">
          <div className="row-6 m-2">
            <img
              className="searchAppsImages"
              alt="search app logo"
              src={props.icon}
            />
          </div>
          <div className="row-3 ml-2">
            <h3
              className="sentimentInfo"
              style={{ fontSize: "1vw", color: "#fff", paddingTop: "1vw" }}
            >
              {props.title}
            </h3>{" "}
          </div>
          <div className="row-3 ml-2" style={{ marginTop: "0.5vw" }}>
            <p className="sentimentInfo">{props.developer}</p>
          </div>
        </div>
        <div className="col-6 sentimentInfo">
          <div className="row m-3">
            <div style={{ fontStyle: "italic" }}>"{props.summary}"</div>
          </div>
          <div className="row m-3">Installs : {props.installs}</div>
          <div className="row m-3">Rating : {props.rating}</div>
          <div className="row m-3">Price : {props.price}</div>
        </div>
      </div>
    </div>
  );
}
export default SearchDescripBox;
