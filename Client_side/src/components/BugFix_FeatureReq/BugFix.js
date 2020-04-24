/* 
  Page      - BugFix.js page
  Function  - Shows the bug fix keywords relevant to the chosen app
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import "bootstrap/dist/css/bootstrap.min.css";
import DescripBox from "./DescripBox";
import Button from "react-bootstrap/Button";
import "../../App.css";
import Footer from "../NavigationBar/Footer";

function BugFix() {
  //Uses the current url object into location variable
  let location = useLocation();
  //Stores the pathname of the current browser page
  const currentURL = location.pathname;

  //props and state for loading
  const [isLoaded, setIsLoaded] = useState(false);
  //props and state for error checking
  const [error, setError] = useState(null);
  //props and state for retrieve data from api
  const [items, setItems] = useState([]);

  //Get localstorage value of appName
  const app = localStorage.getItem("appName");
  //console.log(app);

  //calls the keywords api
  useEffect(() => {
    fetch("http://localhost:5000/bugfixes/keywords/" + app)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [app]);

  if (error) {
    return <ErrorPage errorDet={error.message} />;
  } else if (!isLoaded) {
    return <LoadingBox />;
  } else {
    return (
      <div>
        {/*Adding the background image*/}
        <div class="bgimg-14">
          {/*Adding the main heading */}
          <div class="caption">
            <span className="border">
              Bug fixes requested by the users of this app
            </span>
          </div>
        </div>

        {/*The keywords will be in divs descrip-10 and descrip-11 alternatively*/}
        <div>
          {items.map((item) => (
            <div key={item} style={{ listStyleType: "none" }}>
              <div
                className={"descrip-" + (items.indexOf(item) % 2 ? "10" : "11")}
              >
                {/* author={item.userName} date={item.date} score={item.rating} text={item.text} */}

                <DescripBox type="bugfix" keywords={item[0]} points={item[1]} />
              </div>
            </div>
          ))}

          {/*div contains the button to view the reviews without a particular keyword */}
          <div className="descrip-11">
            <div className="container text-center">
              {/*clicking on the button will lead to the remainingBF.js page */}
              <Link
                to={{
                  pathname: currentURL + "/remainingBF",
                }}
              >
                {/*Button to view the rest of the reviews */}
                <Button
                  variant="secondary"
                  className="mx-4 bugDescripBtn"
                  style={{ fontSize: "1.5vw", padding: "1.3vw" }}
                >
                  View the rest of the reviews addressing bug fixes
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default BugFix;
