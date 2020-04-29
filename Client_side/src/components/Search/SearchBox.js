/* 
  Page      - SearchDescripBox.js page
  Function  - Displays each value of the props
  Parameter - @param {*} props
  Author    - Sajani Sihara, Christina Thambirajah
*/

import React from "react";

function SearchBox(props) {
  return (
    <div className="searchBox">
      <div className="row">
        <div className="col-6">
          <div className="row-6 m-2">
            <img
              className="searchAppsImages"
              alt="search app logo"
              src={process.env.PUBLIC_URL + "/images/sajani.jpg"}
            />
               <div className="col-10 ml-2">
            <h3
          
              style={{ fontSize: "1.5vw", color: "#000", paddingTop: "1vw" }}
            >
              facebook
            </h3>{" "}
          </div>
          </div>
       
          <div className="row-6 ml-2" style={{ marginTop: "0.5vw"}}>
            <p style={{fontSize:"1.1vw",color: "#000" }}>Facebook Developer</p>
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
export default SearchBox;
