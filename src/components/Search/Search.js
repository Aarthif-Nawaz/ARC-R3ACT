import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import SearchDescripBox from "./SearchDescripBox";
import "../../App.css";
import Footer from "../NavigationBar/Footer";

function Search() {
  return (
    <div>
      <div class="bgimg-18">
        <div class="caption">
          <span className="border">Is this the app you are looking for?</span>
        </div>
      </div>
      <div>
        <div className="descrip-11">
          <SearchDescripBox />
        </div>

        <div className="descrip-14">
          <SearchDescripBox />
        </div>

        <div className="descrip-11">
          <SearchDescripBox />
        </div>

        <div className="descrip-14">
          <SearchDescripBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Search;
