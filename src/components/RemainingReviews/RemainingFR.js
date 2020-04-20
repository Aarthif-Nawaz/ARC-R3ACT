import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import RemainingFRDescripBox from "./RemainingFRDescripBox";
import "../../App.css";
import Footer from "../NavigationBar/Footer";

function RemainingFR() {
  return (
    <div>
      <div class="bgimg-20">
        <div class="caption">
          <span className="border">
            Take a look at the rest of the reviews addressing feature requests
          </span>
        </div>
      </div>
      <div>
        <div className="descrip-17">
          <RemainingFRDescripBox/>
        </div>

        <div className="descrip-16">
          <RemainingFRDescripBox/>
        </div>

        <div className="descrip-17">
          <RemainingFRDescripBox/>
        </div>
        
        <div className="descrip-16">
          <RemainingFRDescripBox/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default RemainingFR;
