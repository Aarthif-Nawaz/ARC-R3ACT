import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import RemainingBFDescripBox from "./RemainingBFDescripBox";
import "../../App.css";
import Footer from "../NavigationBar/Footer";

function RemainingBF() {
  return (
    <div>
      <div class="bgimg-19">
        <div class="caption">
          <span className="border">
            Take a look at the rest of the reviews addressing bug fixes
          </span>
        </div>
      </div>
      <div>
        <div className="descrip-11">
          <RemainingBFDescripBox keywords={["location"]} points="5.0" />
        </div>

        <div className="descrip-15">
          <RemainingBFDescripBox
            keywords={["huewei P40 Lite E"]}
            points="4.7"
          />
        </div>

        <div className="descrip-11">
          <RemainingBFDescripBox keywords={["points"]} points="3.8" />
        </div>
        <div className="descrip-15">
          <RemainingBFDescripBox
            description="App crashes suddenly"
            keywords={["App", "crash"]}
            points="3.7"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default RemainingBF;
