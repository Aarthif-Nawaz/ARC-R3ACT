import React from 'react';
import Container from 'react-bootstrap/Container';


function Review(){
    return(
        <Container className='p-4 my-5 bg-light rounded'>
            <p>Author Name</p>
            <p>Date</p>
            <p>5 Stars</p>
            <p>The part of the review that discussed about the bug fix or feature request</p>
        </Container>
    );
}
export default Review;