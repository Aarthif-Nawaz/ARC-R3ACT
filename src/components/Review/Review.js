import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../NavigationBar/Footer";
import "../../App.css";

function Review(props) {
  return (
    <Container fluid>
      {/* <p>Author Name : {props.author}</p>
            <p>Date : {props.date}</p>
            
            <div className="star">{[...Array(Number(props.score))].map(( i =>(
                <label key={i+1}>★</label>
            )))} 
            </div>
            <p>{props.text}</p> */}
      <div class="bgimg-5">
        <div class="caption">
          <span className="border">
            Reviews addressing "High Energy Consumption" ...
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="descrip-5">
          <div
            style={{
              paddingLeft: 150,
              paddingRight: 150,
              paddingBlockStart: 10,
            }}
          >
            <p>Author Name:</p>
            <p>Date:</p>
            <p>Text:</p>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="descrip-4">
          <div
            style={{
              paddingLeft: 150,
              paddingRight: 150,
              paddingBlockStart: 10,
            }}
          >
            <p>Author Name:</p>
            <p>Date:</p>
            <p>Text:</p>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="descrip-5">
          <div
            style={{
              paddingLeft: 150,
              paddingRight: 150,
              paddingBlockStart: 10,
            }}
          >
            <p>Author Name:</p>
            <p>Date:</p>
            <p>Text:</p>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="descrip-4">
          <div
            style={{
              paddingLeft: 150,
              paddingRight: 150,
              paddingBlockStart: 10,
            }}
          >
            <p>Author Name:</p>
            <p>Date:</p>
            <p>Text:</p>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="descrip-5">
          <div
            style={{
              paddingLeft: 150,
              paddingRight: 150,
              paddingBlockStart: 10,
            }}
          >
            <p>Author Name:</p>
            <p>Date:</p>
            <p>Text:</p>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
export default Review;
