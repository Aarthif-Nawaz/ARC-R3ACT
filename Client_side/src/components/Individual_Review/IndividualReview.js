/* 
  Page      - IndividualReview.js page
  Function  - Shows the complete review from the all reviews pages
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useState, useEffect } from "react";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import Footer from "../NavigationBar/Footer";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function IndividualReview(props) {
  //review id passed through link
  const { id } = props.location.state;

  //Get app id from local storage
  const app = localStorage.getItem("appName");

  //props and state for loading
  const [isLoaded, setIsLoaded] = useState(false);
  //props and state for error checking
  const [error, setError] = useState(null);
  //props and state for retrieve data from api
  const [items, setItems] = useState([]);

  // fetches the individual review from api
  useEffect(() => {
    fetch("http://localhost:5000/fullreview/" + app + "/" + id)
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
  }, [id]);

  if (error) {
    return <ErrorPage errorDet={error.message} />;
  } else if (!isLoaded) {
    return <LoadingBox />;
  } else {
    return (
      <div className="container-fluid">
        <div class="bgimg-17">
          <div className=" col-6 MenuBoxPage">
            <h3
              style={{
                textAlign: "center",
                fontWeight: 700,
                float: "left",
                padding: "1.3vw",
                fontSize: "2vw",
                marginTop: "12%",
              }}
            >
              Take a look at the complete review here
            </h3>
            {items.map((item) => (
              <div key={items.reviewId}>
                <div className="reviewBox">
                  <h3 style={{ fontWeight: 600 }}>{item.username}</h3>
                  <h3 style={{ fontWeight: 500 }}>
                    {" "}
                    <Moment format="YYYY/MM/DD">{item.date}</Moment>
                  </h3>
                  <p style={{ fontSize: "1vw", marginBottom: "1vw" }}>
                    Version: {item.version}
                  </p>
                  <div
                    className="star"
                    style={{ color: "#000", marginBottom: "3%" }}
                  >
                    {[...Array(Number(item.rating))].map((i) => (
                      <label key={i + 1}>★</label>
                    ))}
                  </div>
                  <p className="reviewText" style={{ fontSize: "1.1vw" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
export default IndividualReview;
