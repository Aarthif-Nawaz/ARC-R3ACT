import React from "react";
import { css } from "@emotion/core";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import DotLoader from "react-spinners/DotLoader";

/**
 * added #root to the home css in App.css
 * commented out the div in App.js
 * Spinner refering 'https://www.npmjs.com/package/react-spinners'
 */
function LoadingBox() {
  const override = css`
    display: block;
    margin: 2;
  `;
  return (
    <Container
      fluid
      style={{ height: "100%", backgroundColor: "rgb(88, 87, 87)" }}
    >
      <Col style={{ width: "30%", top: "30%", margin: "0 auto" }}>
        <div className="sweet-loading">
          <DotLoader css={override} size={200} color={"#fff"} />
        </div>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: 3,
            fontSize: "1.1vw",
            textAlign: "center",
            color: "#fff",
            fontWeight: 600,
            marginTop: "20%",
          }}
        >
          {" "}
          We are analysing the reviews. This will take a moment.
        </p>
      </Col>
    </Container>
  );
}
export default LoadingBox;
