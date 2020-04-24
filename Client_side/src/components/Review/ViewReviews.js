/* 
  Page      - ViewReview.js page
  Function  - All the reviews are displayed here
  Parameter - @param {*} props
  Author    - Sajani Sihara, Ridmi Amasha
*/
import React, { useEffect, useState } from "react";
import Review from "./Review";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import Footer from "../NavigationBar/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

/**
 * All the reviews are displayed here
 * @param {*} props
 */
function ViewAllReviews(props) {
  //props and state for loading
  const [isLoaded, setIsLoaded] = useState(false);
  //props and state for error checking
  const [error, setError] = useState(null);
  //props and state for retrieve data from api
  const [items, setItems] = useState([]);

  //api call for calling keywords either in bugfix or feature request
  const { urlLink } = props.location.state;
  //keyword pased as state from '/reviews' link
  const { keyword } = props.location.state;

  //console.log(urlLink)

  //calls the api 'urlLink'
  useEffect(() => {
    fetch(urlLink, {
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
  }, [urlLink]);

  if (error) {
    //Error shown if the api calls fails
    return <ErrorPage errorDet={error.message} />;
  } else if (!isLoaded) {
    //Loading while ui retrieve json data from api
    return <LoadingBox />;
  } else {
    return (
      <div>
        <div className="bgimg-5">
          <div className="caption">
            <span className="border">Reviews addressing "{keyword}"</span>
          </div>
        </div>
        <div>
          <ul style={{ margin: 0, padding: 0 }}>
            {items.map((item) => (
              <li key={items._id} style={{ listStyleType: "none" }}>
                <div
                  className={"descrip-" + (items.indexOf(item) % 2 ? "4" : "5")}
                >
                  {/*Review component for each review retrieve that iterates from the api */}
                  <Review
                    id={item._id}
                    author={item.username}
                    date={item.date}
                    score={item.rating}
                    text={item.partReview}
                  />
                </div>
              </li>
            ))}
          </ul>
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
export default ViewAllReviews;
