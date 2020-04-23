import React from "react";
import Button from "react-bootstrap/Button";
//import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../App.css";

function Review(props) {
   
  let location = useLocation();
  const currentURL = location.pathname;
  console.log(currentURL);
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <p>Author Name : {props.author}</p>
      <p>Date : {props.date}</p>
      <div className="star">
        {[...Array(Number(props.score))].map((i) => (
          <label key={i + 1}>★</label>
        ))}
      </div>
      <p>Review :{props.text}</p>
      <div className="container text-right">
      <Link to={{
             pathname:currentURL+'/'+props.id,
            state:{
                     id:props.id
                  }
              }}>
        <Button variant="secondary" className="mx-2 descrip-button">
          View Complete Review
        </Button>
        </Link>
      </div>
    </div>
  );
}
export default Review;
