import React from "react";
import search from "./images/search.png";
import "./fonts/source-code-pro/SourceCodePro-Black.otf";
import "./App.css";

function App() {
  return (
    <html>
      <head>
        <title>Search for Apps</title>
      </head>
      <body>
        <div class="backgroundimg">
          <img src={search} alt="search icon" />
        </div>
        <div class="intro-heading">
          <p>Application Review Classifier</p>
          </div>
          <div class="intro-para">
          <h3>
            Monitor and analyse app reviews from the Google Play Store. ARC
            equips you with the data and insights needed to master the mobile
            app ecosystem.
          </h3>
        </div>
        <div class="search-bar">
          <input
            class="search-text"
            type="text"
            placeholder="Enter an app name"
          ></input>
          <a class="search-button" href="#">
            <img src={search} class="search-icon" alt="search icon" />
          </a>
        </div>
      </body>
    </html>
  );
}

export default App;
