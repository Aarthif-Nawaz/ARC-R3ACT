import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import FRDescripBox from "./FRDescripBox";
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
          description="Edit user details"
          keywords={["edit", "username"]}
          points="5.0"
        />
        </div>
        <div className=' descrip-12'>
        <FRDescripBox
          description="Re-design UI"
          keywords={["design", "ui"]}
          points="4.7"
        />
        </div>
        <div className=' descrip-13'>
        <FRDescripBox
          description="Login with facebook, Google+ and Twitter"
          keywords={["login", "facebook", "google", "twitter"]}
          points="3.8"
        />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FeatureRequest;
