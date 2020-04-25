/* 
  Page      - MenuBox.js page
  Function  - Displays the menu (Bug Fixes, Feature Requests and Overall Sentiment)
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useState, useEffect } from "react";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import { Link, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Footer from "../NavigationBar/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class MenuBox extends React.Component {

  // fetchInterval = false;
  // urlString = "";

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     error: {},
  //     isLoaded: false,
  //     items: { wait: true }
  //   };

  //   const location = this.props.location;

  //   const { appId } = location.state;
  //   localStorage.setItem("appName", appId)

  //   this.urlString = "http://localhost:5000/app/" + appId;
  //   console.log("this.urlString", this.urlString);

  //   const { items } = this.state;

  //   if (items && items.wait) {
  //     console.log("wrong items");

  //     if (!this.fetchInterval) {

  //       console.log("no fetch interval");
  //       this.getAppDetails(this.urlString)
  //       console.log("get app details");

  //       this.fetchInterval = setInterval(() => {
  //         this.getAppDetails(this.urlString)
  //       }, 120000);

  //     }
  //   } else {
  //     clearInterval(this.fetchInterval);
  //   }
  // }

  // getAppDetails(urlString) {
  //   fetch(urlString, {
  //     method: "POST"
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.handleDetailsSuccess(result);
  //       },
  //       (error) => {
  //         this.setState({ error });
  //       }
  //     );
  // }

  // handleDetailsSuccess(result) {
  //   console.log("result", result);
  //   this.setState({ items: result });
  //   if (!result.wait) {
  //     clearInterval(this.fetchInterval);
  //     this.setState({ isLoaded: true });
  //   }
  // }

  render() {
    // const { isLoaded, error } = this.state;
    const { match } = this.props;

    // if (error && error.message) {
    //   console.log("error", error);

    //   return <ErrorPage errorDet={error.message} />;
    // } else if (!isLoaded) {
    //   return <LoadingBox />;
    // } else {
      return (
        <div className="container-fluid">
          <div className="bgimg-6">
            <div className=" col-6 MenuBoxPage">
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: 900,
                  float: "left",
                  padding: "1.3vw",
                  fontSize: "2vw",
                  marginTop: "12%",
                }}
              >
                What reviews would you like to see?
            </h3>

              <div className="row menuIntro">
                <div className="col mr-5" style={{ fontSize: "1.5vw" }}>
                  The reviews of the mobile application are divided into three
                  segments. Choose one of the following to see all the reviews
                  relevant to that particular category.
              </div>
              </div>

              <div className="container MenuBoxContainer">
                <div className="row">
                  <div className="col-4">
                    <Link to={match.url + "/bugfix"}>
                      <div className="card p-4" style={{ fontSize: "1vw" }}>
                        Bug <br></br>Fixes
                    </div>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to={match.url + "/featureRequest"}>
                      <div className="card p-4" style={{ fontSize: "1vw" }}>
                        Feature Requests
                    </div>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to={match.url + "/overallSentiment"}>
                      <div className="card p-4" style={{ fontSize: "1vw" }}>
                        Overall Sentiment
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-light"
            id="backBtn"
            onClick={() => this.props.history.goBack()}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ width: "2vw" }} />
          </button>
          <Footer />
        </div>
      );
    }

  }
// }
export default MenuBox;
