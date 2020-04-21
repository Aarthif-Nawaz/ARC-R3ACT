import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import FRDescripBox from "./FRDescripBox";
import Button from "react-bootstrap/Button";
import Footer from "../NavigationBar/Footer";

function FeatureRequest() {
  return (
    <div>
      <div class="bgimg-15">
        <div class="caption">
          <span className="border">
            App features requested by the users of this app
          </span>
        </div>
      </div>
      <div>
        <div className=' descrip-13'>
        <FRDescripBox
          keywords={["username"]}
          points="5.0"
        />
        </div>
        <div className=' descrip-12'>
        <FRDescripBox
          keywords={["ui"]}
          points="4.7"
        />
        </div>
        <div className=' descrip-13'>
        <FRDescripBox
          keywords={["login"]}
          points="3.8"
        />
        </div>
        <div className="descrip-12">
          <div className="container text-center">
            <Button
              variant="secondary"
              className="mx-4 bugDescripBtn"
              style={{ fontSize: "1.5vw", padding: "1.1vw" }}
            >
              View the rest of the reviews addressing feature requests
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FeatureRequest;
