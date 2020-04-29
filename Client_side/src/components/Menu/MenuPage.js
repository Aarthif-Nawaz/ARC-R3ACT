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
import {
  faDownload,
  faComments,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import { Helmet } from "react-helmet";

const TITLE = "Overall Sentiment | ARC";

function MenuPage(props) {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="icon" href="images/logo1.png" sizes="16x16"></link>
      </Helmet>

      <div className="bgimg-6">
        <div className="col-7" style={{marginLeft:"28%"}}>
          <div className="row" >
          <h3
              style={{
                textAlign: "center",
                padding: "1.3vw",
                fontSize: "2rem",
                marginTop: "10%",
                marginBottom:"2%",
                float:"left"
              }}
            >
              Overlook of your application
            </h3>
            <div className="col-md-4 m-2">
              {" "}
              <img
                className="img-responsive m-2 ml-5  searchAppsImages"
                width="150px"
                height="150px"
                alt="search app logo"
                src={process.env.PUBLIC_URL + "/images/sajani.jpg"}
              />
            </div>
            <div className="col m-3">
              <p>
                <h3 style={{ fontWeight: 600 }}>facebook</h3>{" "}
              </p>
              <p style={{ fontSize: "1.3rem" }}>Facebook Developer</p>
              <p style={{ fontSize: "1.3rem" }}>Social Media Messenger</p>
            </div>
          </div>
          <div className="row m-3">
            <div className="col-md-4 m-3">
              <p style={{ fontSize: "1.3rem" }}>
                <FontAwesomeIcon
                  icon={faComments}
                  className="pr-2"
                  style={{ width: "2vw", color: "#282e34" }}
                />
                3M Reviews
              </p>
              <p style={{ fontSize: "1.3rem" }}>
                <FontAwesomeIcon
                  icon={faDownload}
                  className="pr-2"
                  style={{ width: "2vw", color: "#282e34" }}
                />
                60.0MB
              </p>
              <p style={{ fontSize: "1.3rem" }}>
                <FontAwesomeIcon
                  icon={faArrowCircleDown}
                  className="pr-2"
                  style={{ width: "2vw", color: "#282e34" }}
                />
                100M+
              </p>
            </div>
            <div className="col">
              <div
                id="DescripBtn"
                style={{
                  width: "150px",
                  height: "150px",
                  border: "#fff 0.2vw solid",
                  borderRadius: "0.6vw",
                  boxShadow: "0 0.2vw 0.5vw 0 rgba(12, 10, 10, 0.897)",
                }}
              >
                <p style={{ textAlign: "center" }}>Rating </p>
                <h3
                  style={{
                    fontSize: "5rem",
                    textAlign: "center",
                    color: "#fff",
                    font: "Lato",
                  }}
                >
                  3/5
                </h3>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "1.3rem", marginLeft:"20%" }}>View reviews of your applications</p>
          <div className="row m-3">
         
            <div className="col-md-4 m-3">
              <button
                className="card p-3"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Bug Fixes
              </button>
            </div>
            <div className="col-md-4 mt-3">
              <button
                className="card p-3"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Feature Requests
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuPage;
