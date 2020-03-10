import React from "react";
import {Link} from 'react-router-dom';

import "../App.css";

function SearchApps() {
  return (
    <html>
      <head>
        <title>Search for Apps</title>
      </head>
      <body>
        <div class="backgroundimg">
          <img src={process.env.PUBLIC_URL + '/images/search.png'} alt="search icon" />
        </div>
        <div class="intro-heading">
          <p>Application Review Classifier</p>
          </div>
          <div class="intro-para">
          <h4>
            Monitor and analyse app reviews from the Google Play Store. ARC
            equips you with the data and insights needed to master the mobile
            app ecosystem.
          </h4>
        </div>
        <div class="search-bar">
          <input
            class="search-text"
            type="text"
            placeholder="Enter an app name"
          ></input>
         <Link to="/loading" className ='search-button'>
            <img src={process.env.PUBLIC_URL + '/images/search.png'} class="search-icon" alt="search icon" />
          </Link>
        </div>
      </body>
    </html>
  );
}

export default SearchApps;
