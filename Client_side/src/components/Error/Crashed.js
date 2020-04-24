/* 
  Page        - Crashed.js page
  Function    - Shows the error page when the page crashes
  Parameters  - @param {errorDet} props
  Author      - Ridmi Amasha
*/

import React from "react";
import "../../App.css";

function CrashPage(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="container-fluid error_div">
      <div className="container-fluid error_crash_bg">
        <div className="container-fluid error_content">
          <div className="row">
            <div className="col">
              <img
                src={process.env.PUBLIC_URL + "/images/error_icon.png"}
                alt="error_image"
                style={{ width: "90%" }}
              />
            </div>
            <div className="col error_content_headings">
              <h1 style={{ color: "#fff", fontSize: "10vw" }}>Oops!</h1>
              <h3 style={{ color: "#fff", fontSize: "2vw" }}>
                Error : {props.errorDet}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container go_back_button_group" fluid>
        <div className="row">
          <div className="col">
            <button variant="outline-primary" style={{ fontSize: "1.5vh" }} onClick={refreshPage}>
              Try Loading Again!
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CrashPage;
