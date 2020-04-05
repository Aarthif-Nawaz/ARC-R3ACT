import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MenuBox(){
return(
    <Container fluid  className="MenuBoxPage">
    
        <Container className="MenuBoxContainer">
            
            <Row>
                <Col><Link to="/bugfix"><Card className='p-4 text-center'>Bug Fix</Card></Link></Col>
                <Col><Link to="/featureRequest"><Card className='p-4 text-center'>Feature Request</Card></Link></Col>
                <Col><Link to="/overallSentiment"><Card className='p-4 text-center'>Overall Sentiment</Card></Link></Col>
            </Row>
            
            
            </Container>
        </Container>
   
);

}
export default MenuBox;