import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../App.css";

function SearchApps() {
  return (
    <Container fluid>
      <Container fluid>
        <Container>
          <Col>
            <Row id="header">
              <p>We analyse mobile app reviews.</p>
            </Row>
            <Row>
              <Container className="searchBar">
                <InputGroup className="mb-3">
                  <FormControl
                    defaultValue="Search for a mobile app"
                    aria-label="search for a mobile app"
                    className="searchPlaceholder"
                  />
                  <InputGroup.Append>
                    <Button className="button" variant="outline-secondary">
                      SEARCH
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Container>
            </Row>
          </Col>
        </Container>
      </Container>
    </Container>
  );
}

export default SearchApps;
