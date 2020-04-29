/* 
  Page      - Search.js page
  Function  - Displays application that contains or related to the app that passed from the url
  Parameter - @param {*} props
  Author    - Ridmi Amasha, Sajani Sihara
*/
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./SearchBox";
import "../../App.css";
import Footer from "../NavigationBar/Footer";
import { Helmet } from "react-helmet";

const TITLE = "Search Apps | ARC";

function SearchPage() {
  return (
    <div>
         <Helmet>
        <title>{TITLE}</title>
        <link rel="icon" href="images/logo1.png" sizes="16x16"></link>
      </Helmet>
      <div className="bgimg-18">
        <div className="caption">
          <span className="border">Is this the app you are looking for?</span>
        </div>
      </div>
      <div>
        <div className='row'>
          <div className='col'> <SearchBox /></div>
          <div className='col'> <SearchBox /></div>
        </div>
        <div className='row'>
          <div className='col'> <SearchBox /></div>
          <div className='col'> <SearchBox /></div>
        </div>
        <div className='row'>
          <div className='col'> <SearchBox /></div>
          <div className='col'> <SearchBox /></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
export default SearchPage;
