import React from "react";
/**
 * Search Description Box
 * Displays the each values of the props
 * @param {*} props
 */
function SearchDescripBox(props) {
  return (
    <div class="searchBox">
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
              style={{ fontSize: "2vw", color: "#fff", paddingTop: 20 }}
            >
              {props.title}
            </h3>{" "}
          </div>
          <div className="row-3 ml-2" style={{ marginTop: "1vw" }}>
            <p className="sentimentInfo">{props.developer}</p>
          </div>
        </div>
        <div className="col-6 sentimentInfo">
          <div className="row m-3">
            <div style={{ fontStyle: "italic" }}>"summary"</div>
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
