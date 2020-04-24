import React, { useEffect, useState } from "react";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchDescripBox from "./SearchDescripBox";
import "../../App.css";
import Footer from "../NavigationBar/Footer";
import { Link } from "react-router-dom";
/**
 * Search Page
 * output - Displays application that contains or related to the app that passed from the url
 * @param {*} props
 */
function Search(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  const app = props.match.params.app;

  //URL for calling the api for searching in the server,application id needs to be appended
  const url = "http://localhost:5000/search/" + app;

  //fetches the api call from the server
  useEffect(() => {
    fetch(url)
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
  }, [url]);

  if (error) {
    return <ErrorPage errorDet={error.message} />;
  } else if (!isLoaded) {
    return <LoadingBox />;
  } else {
    return (
      <div>
        <div class="bgimg-18">
          <div class="caption">
            <span className="border">Is this the app you are looking for?</span>
          </div>
        </div>
        <div>
          {items.map((item) => (
            <li key={item.title} style={{ listStyleType: "none" }}>
              <div
                className={"descrip-" + (items.indexOf(item) % 2 ? "14" : "11")}
              >
                {/* This is fixed on chrome, needs to be changed */}
                {/*Passes the selected app's app id to the '/:appId',sends the app id as a state*/}
                <Link
                  to={{
                    pathname: app + "/" + item.appId,
                    state: { appId: item.appId },
                  }}
                >
                  {/*Sends iterated items from the api to display on SearchDescripBox component */}
                  <SearchDescripBox
                    title={item.title}
                    developer={item.developer}
                    icon={item.icon}
                    installs={item.installs}
                    rating={item.rating}
                    price={item.price}
                  />
                </Link>
              </div>
            </li>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Search;
