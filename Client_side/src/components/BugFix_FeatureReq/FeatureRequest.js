/* 
  Page      - FeatureRequest.js page
  Function  - Shows the feature request keywords relevant to the chosen app
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import "bootstrap/dist/css/bootstrap.min.css";
import DescripBox from "./DescripBox";
import Button from "react-bootstrap/Button";
import Footer from "../NavigationBar/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function FeatureRequest(props) {
  //props and state for loading
  const [isLoaded, setIsLoaded] = useState(false);
  //props and state for error checking
  const [error, setError] = useState(null);
  //props and state for retrieve data from api
  const [items, setItems] = useState([]);

  //Uses the current url object into location variable
  let location = useLocation();
  //Stores the pathname of the current browser page
  const currentURL = location.pathname;
  //local storage value to the app id
  const app = localStorage.getItem("appName");

  //fetches the reviews related to the keyword
  useEffect(() => {
    fetch("http://localhost:5000/featurereqs/keywords/" + app,{method: "POST"})
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
      <div>
        {/*Adding the background image*/}
        <div className="bgimg-15">
          {/*Adding the main heading */}
          <div className="caption">
            <span className="border">
              App features requested by the users of this app
            </span>
          </div>
        </div>
        {/*The keywords will be in divs descrip-12 and descrip-13 alternatively*/}
        <div>
          {items.map((item) => (
            <div key={item} style={{ listStyleType: "none" }}>
              <div
                className={"descrip-" + (items.indexOf(item) % 2 ? "12" : "13")}
              >
                {/* author={item.userName} date={item.date} score={item.rating} text={item.text} */}
                <DescripBox type="fr" keywords={item[0]} points={item[1]} />
              </div>
            </div>
          ))}

          <div className="descrip-12">
            <div className="container text-center">
              {/*Link to the feature requests that don't have a common keyword*/}

              <Link
                to={{
                  pathname: currentURL + "/remainingFeatureRequests",
                }}
              >
                {/*clicking on the button will lead to the remainingFR.js page */}
                <Button
                  variant="secondary"
                  className="mx-4 bugDescripBtn"
                  style={{ fontSize: "1.5vw", padding: "1.1vw" }}
                >
                  View the rest of the reviews addressing feature requests
                </Button>
              </Link>
            </div>
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

export default FeatureRequest;
