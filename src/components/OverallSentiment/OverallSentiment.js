import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Footer  from '../NavigationBar/Footer';

function OverallSentiment(){
    return(
        <Container className='mt-5 sentiment_box'>
            <Row>
                <Col><Container>App Logo</Container></Col>
                <Col>
                    <Row><h1>App Name</h1> </Row>
                    <Row><h5>Author Name</h5></Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>3 Stars</Row>
                    <Row>3M Reviews</Row>
                    <Row>50.0MB</Row>
                    <Row>100+ Downloads</Row>
                </Col>
                <Col><h1>5.8</h1></Col>
            </Row>
            <Footer/>

            
        </Container>
    );
}
export default OverallSentiment;