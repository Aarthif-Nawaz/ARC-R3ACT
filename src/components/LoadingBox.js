import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function LoadingBox(){
return(
    
        <Container>
            <Row>
                <Col><Link to="/menu"><Card className='p-4 text-center'>Please wait. Loading the reviews...</Card></Link></Col>
            </Row>     
        </Container>
   
);

}
export default LoadingBox;