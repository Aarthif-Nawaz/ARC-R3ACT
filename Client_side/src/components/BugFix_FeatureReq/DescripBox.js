/* 
  Page        - DescripBox.js page
  Function    - Description component for bug fix page, feature request
  Parameter   - @param {*} props
  Author      - Sajani Sihara, Ridmi Amasha
*/

import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

function DescripBox(props) {
  //Current browser url object is stored in location
  let location = useLocation();
  //Path to the current browser page
  const currentURL = location.pathname;

  //keywords are passed through the component
  const keywords = props.keywords;
  //Type of whether bug fix or feature request is passed as a prop through component
  const para = props.type;
  //Dynamic url to stores the api link
  let url = "";
  //localstorage value of app id
  const app = localStorage.getItem("appName");

  //checks if passed props type is feature request
  if (para === "fr") {
    //api for keywords api
    url = "https://arc-r3act.herokuapp.com/featurereqs/reviews/" + app + "/" + keywords;
    return (
      <div className="container-fluid">
        <div className="center-content">
          <div className="row m-1">
            <div className="col">
              <p>Keywords</p>
            </div>
            <div className="col">
              <div
                variant="secondary"
                className={
                  "m-1 " + (props.type === "bug" ? "bug" : "fr") + "KeywordBtn"
                }
              >
                {keywords}
              </div>
            </div>
          </div>
          <div className="row m-1">
            <div className="col">
              <p>Sentiment</p>
            </div>
            <div className="col">{props.points}</div>
          </div>
        </div>
        <div className="container text-right ">
          {/*Links to the page that retrieves the reviews related to the keywords
           * keyword is passed as the query to the url
           * keyword url is sent as state
           */}
          <Link
            to={{
              pathname: currentURL + "/reviews",
              state: {
                urlLink: url,
                keyword: keywords,
              },
              search: "?keyword=" + keywords,
            }}
          >
            <Button
              variant="secondary"
              id="DescripBtn"
              className={
                "mx-2  " + (props.type === "bug" ? "bug" : "fr") + "DescripBtn"
              }
            >
              View Reviews
            </Button>
          </Link>
        </div>
      </div>
    );
  } else {
    /**For Bug fixes reviews related to the given keyword */
    url = "https://arc-r3act.herokuapp.com/bugfixes/reviews/" + app + "/" + keywords;
    return (
      <div className="container-fluid">
        <div className="center-content">
          <div className="row m-1">
            <div className="col">
              <p>Keywords</p>
            </div>
            <div className="col">
              <div
                variant="secondary"
                className={
                  "m-1 " + (props.type === "bug" ? "bug" : "fr") + "KeywordBtn"
                }
              >
                {keywords}
              </div>
            </div>
          </div>
          <div className="row m-1">
            <div className="col">
              <p>Bug sentiment</p>
            </div>
            <div className="col">{props.points}</div>
          </div>
        </div>
        <div className="container text-right">
          {/*Links to the page that retrieves the reviews related to the keywords
           * keyword is passed as the query to the url
           * keywords url is sent as state
           */}
          <Link
            to={{
              pathname: currentURL + "/reviews",
              state: {
                urlLink: url,
                keyword: keywords,
              },
              search: "?keyword=" + keywords,
            }}
          >
            {" "}
            <Button
              variant="secondary"
              id="DescripBtn"
              className={
                "mx-2  " + (props.type === "bug" ? "bug" : "fr") + "DescripBtn"
              }
            >
              View Reviews
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default DescripBox;
