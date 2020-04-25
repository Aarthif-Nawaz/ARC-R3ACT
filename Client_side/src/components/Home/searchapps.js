/* 
  Page      - searchapps.js page
  Function  - Search component in the home page
            - Retrieves the user input and send to the "/search/:appId"
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function SearchAppsClass() {
  const [appName,setName] = useState("");

  return (
    <div className="container-fluid">
      <div className="container-fluid">
        {/*Adding the main heading of the home page */}
        <div className="col">
          <div className="container-fluid" id="header">
            <p>We analyse mobile app reviews.</p>
          </div>
          <div className="container-fluid" style={{width:"50vw"}}>
            {/*adding the search bar */}
            <div className="container"id="searchBar">
              <div className="input-group" id="searchInputGroup">
                <input
                  type="text"
                  id="searchPlaceholder"
                  className="form-control"
                  placeholder="Search for a mobile app"
                  aria-label="search for a mobile app"
                  aria-describedby="basic-addon2"
                  value={appName}
                  autocomplete="off"
                  onChange={e=> setName(e.target.value)}
                />
                <div className="input-group-append">
                  <Link to={{ pathname: "/search/" + appName }}>
                    {/*adding the search button */}
                    <button
                      className="button searchbtn"
                      type="submit"
                      variant="outline-secondary"
                      disabled={!appName}>
                      SEARCH
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAppsClass;
