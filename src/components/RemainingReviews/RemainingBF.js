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
          <RemainingBFDescripBox />
        </div>

        <div className="descrip-15">
          <RemainingBFDescripBox />
        </div>

        <div className="descrip-11">
          <RemainingBFDescripBox />
        </div>

        <div className="descrip-15">
          <RemainingBFDescripBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default RemainingBF;
