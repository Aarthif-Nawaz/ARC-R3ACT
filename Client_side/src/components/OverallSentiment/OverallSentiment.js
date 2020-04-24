/* 
  Page      - OverallSentiment.js page
  Function  - Shows the overall sentiment and other info about a chosen application
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useEffect, useState } from "react";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import Footer from "../NavigationBar/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function OverallSentiment(props) {
  //props and state for loading
  const [isLoaded, setIsLoaded] = useState(false);
  //props and state for error checking
  const [error, setError] = useState(null);
  //props and state for retrieve data from api
  const [items, setItems] = useState([]);

  //Get localstorage value of appName
  const app = localStorage.getItem("appName");

  //fetches the sentiment api for given app id
  useEffect(() => {
    fetch("http://localhost:5000/sentiment/" + app)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [app]);

  if (error) {
    return <ErrorPage errorDet={error.message} />;
  } else if (!isLoaded) {
    return <LoadingBox />;
  } else {
    return (
      <div className="container-fluid">
        <div class="bgimg-16">
          {items.map((item) => (
            <div key={item._id} class="sentimentBox">
              <div className="row">
                <div className="col-3">
                  <div className="row m-2">
                    <img
                      alt="app logo"
                      src={item.icon}
                      style={{ borderRadius: "1.6vw", width: "10vw" }}
                    />
                  </div>
                  <div className="row m-2">
                    <h3 style={{ fontSize: "2.5vw" }}>{item.title}</h3>{" "}
                  </div>
                  <div className="row m-2">
                    <p className="sentimentInfo">{item.developer}</p>
                  </div>
                </div>
                <div className="col-4 sentimentInfo">
                  <div className="row" style={{ margin: "2vw" }}>
                    <div className="col">Sentiment Score :</div>
                    <div className="col">
                      <div className="row">
                        <h1
                          className="p-4"
                          style={{
                            borderRadius: "1.67vw",
                            backgroundColor: "#282e34",
                            color: "#fff",
                            justifyContent: "center",
                            fontSize: "1.5vw",
                          }}
                        >
                          {item.sentiment}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="row m-3">
                    <div style={{ fontStyle: "italic" }}>"{item.summary}"</div>
                  </div>
                  <div className="row m-3">Genre : {item.genre}</div>
                  <div className="row m-3">Reviews : {item.reviews}</div>
                  <div className="row m-3">Installs : {item.installs}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-light"
          id="backBtn"
          onClick={() => props.history.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ width: "2vw" }} />
        </button>
        <Footer />
      </div>
    );
  }
}
export default OverallSentiment;
