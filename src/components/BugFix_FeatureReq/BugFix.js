import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import BFDescripBox from "./BFDescripBox";
import Button from "react-bootstrap/Button";
import "../../App.css";
import Footer from "../NavigationBar/Footer";

function BugFix() {
  return (
    <div>
      <div class="bgimg-14">
        <div class="caption">
          <span className="border">
            Bug fixes requested by the users of this app
          </span>
        </div>
      </div>
      <div>
        <div className="descrip-11">
          <BFDescripBox keywords={["location"]} points="5.0" />
        </div>

        <div className="descrip-10">
          <BFDescripBox keywords={["huewei P40 Lite E"]} points="4.7" />
        </div>

        <div className="descrip-11">
          <BFDescripBox keywords={["points"]} points="3.8" />
        </div>
        <div className="descrip-10">
          <BFDescripBox
            description="App crashes suddenly"
            keywords={["crash"]}
            points="3.7"
          />
        </div>
        <div className="descrip-11">
          <div className="container text-center">
            <Button
              variant="secondary"
              className="mx-4 bugDescripBtn"
              style={{ fontSize: "1.5vw", padding: "1.3vw" }}
            >
              View the rest of the reviews addressing bug fixes
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BugFix;
