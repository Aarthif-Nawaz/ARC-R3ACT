import React from 'react';
import Review from './Review';
import Container from 'react-bootstrap/Container';

function ViewAllReviews(){
    return(
        <Container>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
        </Container>
        
    );
}
export default ViewAllReviews;
