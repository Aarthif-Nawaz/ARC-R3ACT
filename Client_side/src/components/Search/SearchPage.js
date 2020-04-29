/* 
  Page      - Search.js page
  Function  - Displays application that contains or related to the app that passed from the url
  Parameter - @param {*} props
  Author    - Sajani Sihara,Christina Thambirajah
*/
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./SearchBox";
import "../../App.css";
import Footer from "../NavigationBar/Footer";


function SearchPage() {
  return (
    <div>
      <div className="bgimg-18">
        <div className="caption">
          <span className="border">Is this the app you are looking for?</span>
        </div>
      </div>
      <div>
        <SearchBox />
      </div>
      
      <Footer />
    </div>
  );
}
export default SearchPage;
