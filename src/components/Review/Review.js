import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../App.css';



function Review(props){
   

    return(
        <Container className='p-4 my-5 bg-light rounded'>
            {/* <p>Author Name : {props.author}</p>
            <p>Date : {props.date}</p>
            
            <div className="star">{[...Array(Number(props.score))].map(( i =>(
                <label key={i+1}>★</label>
            )))} 
            </div>
            <p>{props.text}</p> */}
            <p>Author Name:</p>
            <p>Date</p>
            <p>Text</p>
        </Container>
    );
}
export default Review;