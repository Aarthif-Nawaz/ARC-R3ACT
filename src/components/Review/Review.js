import React from "react";


import "../../App.css";

function Review(props) {
  return (
    <div className='Container-fluid'>
      
     

      <div style={{ position: "relative" }}>
        <div className="descrip-5 my-5 p-2">
     
            <p>Author Name:  {props.author}</p>
            <p>Date: {props.date}</p>
            <div className="star">{[...Array(Number(props.score))].map(( i =>(
                <label key={i+1}>★</label>
            )))} 
            </div>
            <p>Text:{props.text}</p>
          
        </div>
      </div>

      {/* <div style={{ position: "relative" }}>
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
      </div> */}

      
    </div>
  );
}
export default Review;
