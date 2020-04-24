import React from "react";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../App.css";

/**
 * Review Component
 * @param {*} props from the ViewReview.js
 * Uses the props pass, to show the data
 */

function Review(props) {
  //Current url object in the browser stored into location variable
  let location = useLocation();
  //Gets the current url path name
  const currentURL = location.pathname;

  //console.log(currentURL);

  return (
    <div className="col-8 container-fluid" style={{ padding: 0 }}>
      <div style={{ width: "45vw" }}>
        <p>Author Name : {props.author}</p>
        <p>Date : {props.date}</p>
        <div className="star">
          {[...Array(Number(props.score))].map((i) => (
            <label key={i + 1}>★</label>
          ))}
        </div>
        <p>Review : {props.text}</p>
      </div>
      <div className="container text-right">
        {/*Sends the data to the '/:reviewId' to view the individual review' */}
        <Link
          to={{
            pathname: currentURL + "/" + props.id,
            state: {
              id: props.id,
            },
          }}
        >
          <Button variant="secondary" className="mx-2 descrip-button">
            View Complete Review
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Review;
