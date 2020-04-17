import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../NavigationBar/Footer";

function OverallSentiment() {
  return (
    <div className="container-fluid">
      <div class="bgimg-16">
          <div class="sentimentBox">
        <div class="col-sm-4" >
          <Row>   
            <Col>
              <Row>
                <Container>App Logo</Container>
              </Row>
              <Row>
                <h3 style={{ fontSize: "2.5vw" }}>Uber</h3>{" "}
                </Row>
              <div class="sentimentInfo"><Row>Uber Technologies, Inc.</Row></div>
              <Row>
                  <div style={{marginTop:20, borderRadius:100, backgroundColor:"#282e34", padding:20, color:"#fff"}}>
                <h1>5.8</h1>
                </div>
              </Row>
            </Col>
          </Row>
          </div>
              <div class="col-sm-5" >
          <Row>
             
          <Col></Col>
            <div class="sentimentInfo">
              <Col>
           
              <div style={{fontStyle:"italic"}}><Row>"Tap a button, get a ride"</Row></div>
           
                <Row>Genre : </Row>
                <Row>Reviews : </Row>
                <Row>Installs :</Row>
              </Col>
            </div>
          </Row>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
export default OverallSentiment;
