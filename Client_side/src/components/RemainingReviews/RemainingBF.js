/* 
  Page      - RemainingBF.js page
  Function  - Shows the reviews pertaining to bug fixes that does not have a common keyword
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useEffect, useState } from "react";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../App.css";
import Review from "../Review/Review";
import Footer from "../NavigationBar/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function RemainingBF(props) {
  //props and state for loading
  const [isLoaded, setIsLoaded] = useState(false);
  //props and state for error checking
  const [error, setError] = useState(null);
  //props and state for retrieve data from api
  const [items, setItems] = useState([]);

  //Get localstorage value of appName
  const app = localStorage.getItem("appName");
  console.log(app);

  useEffect(() => {
    fetch("https://arc-r3act.herokuapp.com/bugfixes/common/" + app, {
      method: "POST"
    })
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
        <div className="bgimg-19">
          <div className="caption">
            <span className="border">
              Take a look at the rest of the reviews addressing bug fixes
            </span>
          </div>
        </div>
        <div>
          {items.map((item) => (
            <div key={item} style={{ listStyleType: "none" }}>
              <div
                className={"descrip-" + (items.indexOf(item) % 2 ? "15" : "11")}
              >
                <Review
                  id={item._id}
                  author={item.username}
                  date={item.date}
                  score={item.rating}
                  text={item.text}
                />
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
export default RemainingBF;
