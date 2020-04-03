import React from 'react';
import { css } from "@emotion/core";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import DotLoader from "react-spinners/DotLoader";

/**
 * added #root to the home css in App.css
 * commented out the div in App.js
 * Spinner refering 'https://www.npmjs.com/package/react-spinners'
 */
function LoadingBox(){
    const override = css`
  display: block;
  margin: 2;
 
`;
return(
    <Container style={{height:'100%'}}>
       
        <Col style={{width:'30%',top:'30%',margin:'0 auto'}}>
            <div className="sweet-loading">
            <DotLoader
            css={override}
            size={200}
            color={"#000"}
            />
        </div>
        </Col>
       
    </Container>
   
    
   
);

}
export default LoadingBox;