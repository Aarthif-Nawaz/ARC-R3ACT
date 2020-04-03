import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import '../../App.css';

function CrashPage(props){
    return(
        <Container fluid className="error_div">
            <Container fluid className="error_crash_bg">
          <Container fluid className="error_content">
              <Row>
                  <Col>
                  <img
          
                src={process.env.PUBLIC_URL + "/images/error_icon.png"}
                alt="error_image"
                style={{width:'90%'}}
        />
                </Col>
                  <Col className="error_content_headings">                   
                    <h1 style={{color:'#fff',fontSize:'10vw'}}>Oops!</h1>
                    <h3 style={{color:'#fff',fontSize:'2vw'}}>Error : {props.errorDet}</h3>                  
                 </Col>
              </Row>
              
          </Container>
        </Container>
        <Container className='go_back_button_group' fluid>
            <Row>
                <Col>
                    <Button 
                        variant="outline-primary"
                        style={{fontSize:'1.5vh'}}
                        >
                            Try Loading Again!
                    </Button>{' '}
                </Col>
            </Row>
        
        </Container>
        </Container>
        
    )
}
export default CrashPage;