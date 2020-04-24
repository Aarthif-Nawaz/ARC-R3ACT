/* 
  Page      - MenuBox.js page
  Function  - Displays the menu (Bug Fixes, Feature Requests and Overall Sentiment)
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useState, useEffect } from "react";
//import LoadingBox from "../Error/LoadingBox";
//import ErrorPage from "../Error/Crashed";
import { Link, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Footer from "../NavigationBar/Footer";

function MenuBox({ match }) {
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(null);
  // const [items, setItems] = useState([]);

  const location = useLocation();
  console.log(location.pathname);

  const { appId } = location.state;
  console.log(appId);
  const [values, setValues] = useState(localStorage.setItem("appName", appId));
  const app = localStorage.getItem("appName");

  // useEffect(() => {
  //   fetch("http://localhost:5000/app/" + app)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setItems(result);
  //       },
  //       (error) => {
  //         setError(error);
  //       }
  //     );
  // }, []);
  // if (error) {
  //   return <ErrorPage errorDet={error.message} />;
  // } else if (!isLoaded) {
  //   return <LoadingBox />;
  // } else {
  return (
    <div className="container-fluid">
      <div class="bgimg-6">
        <div className=" col-9 MenuBoxPage">
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
            <div class="row">
              <div class="col-4">
                <Link to={match.url + "/bugfix"}>
                  <div className="card p-4" style={{ fontSize: "1vw" }}>
                    Bug <br></br>Fixes
                  </div>
                </Link>
              </div>
              <div class="col-4">
                <Link to={match.url + "/featureRequest"}>
                  <div className="card p-4" style={{ fontSize: "1vw" }}>
                    Feature Requests
                  </div>
                </Link>
              </div>
              <div class="col-4">
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
      <Footer />
    </div>
  );
}
//}
export default MenuBox;
