import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import FRTrans from "./FRTrans";
import FRSolid from "./FRSolid";
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
        <FRSolid
          description="Edit user details"
          keywords={["edit", "username"]}
          points="5.0"
        />
        <FRTrans
          description="Re-design UI"
          keywords={["design", "ui"]}
          points="4.7"
        />
        <FRSolid
          description="Login with facebook, Google+ and Twitter"
          keywords={["login", "facebook", "google", "twitter"]}
          points="3.8"
        />
      </div>
      <Footer />
    </div>
  );
}

export default FeatureRequest;
