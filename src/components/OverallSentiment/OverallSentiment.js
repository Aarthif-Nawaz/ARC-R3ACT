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
          <Row>
            <Col>
              <Container>App Logo</Container>
            </Col>
            <Col>
              <Row>
                <h3 style={{fontSize:"2vw"}}>App Name</h3>{" "}
              </Row>
              <Row>
                <h4>Author Name</h4>
              </Row>
            </Col>
          </Row>
          <Row>
              <div class="sentimentInfo">
            <Col>
              <Row>3 Stars</Row>
              <Row>3M Reviews</Row>
              <Row>50.0MB</Row>
              <Row>100+ Downloads</Row>
            </Col>
            </div>
            <Col>
              <h1>5.8</h1>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default OverallSentiment;
