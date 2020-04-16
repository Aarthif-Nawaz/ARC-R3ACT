import React from "react";
import Button from 'react-bootstrap/Button';
//import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import "../../App.css";

function Review(props) {
  
  return (
    <div className='container-fluid' style={{padding:0}}>
      <p>Author Name : {props.author}</p>
            <p>Date : {props.date}</p>
            
            <div className="star">{[...Array(Number(props.score))].map(( i =>(
                <label key={i+1}>★</label>
            )))} 
            </div>
            <p>{props.text}</p>
          
    </div>
  );
}
export default Review;