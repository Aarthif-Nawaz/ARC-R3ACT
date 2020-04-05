import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MenuBox() {
  return (
    <Container fluid>
      <div class="bgimg-6">
        <Container className="MenuBoxPage">
          <h3
            style={{
              textAlign: "center",
              fontSize: "2vw",
              fontWeight: 900,
              float: "left",
              padding: 50,
              marginTop: "12%",
            }}
          >
            What reviews would you like to see?
          </h3>

          <p className="menuIntro">
            The reviews of the mobile application are divided into three
            segments. Choose one of the following to see all the reviews
            relevant to that particular category.
          </p>

          <Container className="MenuBoxContainer">
            <Row>
              <Col>
                <Link to="/bugfix">
                  <Card className="p-4">Bug Fixes</Card>
                </Link>
              </Col>
              <Col>
                <Link to="/featureRequest">
                  <Card className="p-4">Feature Requests</Card>
                </Link>
              </Col>
              <Col>
                <Link to="/overallSentiment">
                  <Card className="p-4">Overall Sentiment</Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </Container>
  );
}
export default MenuBox;
