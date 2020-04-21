import React, { useEffect, useState } from "react";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchDescripBox from "./SearchDescripBox";
import "../../App.css";
import Footer from "../NavigationBar/Footer";
import { Link } from "react-router-dom";
import MenuBox from "../Menu/MenuBox";
import {BrowserRouter as Route} from 'react-router-dom';


function Search(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  const app = props.match.params.app;
  //alert(props.match.params.app);
   
  const url = 'http://localhost:5000/search/'+app;
  
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
  }, []);
  // function handleClick(){
  //   const appName = items.find(({ title }) => app === match.params.app)
  // }

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
                <div className={"descrip-" + (item._id % 2 ? "4" : "5")}>
                  {/* author={item.userName} date={item.date} score={item.rating} text={item.text} */}

        

                  <Link to={item.appId+'/menu'}>
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

        {/* <div className="descrip-11">
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
        </div> */}
      </div>
      <Footer />
    </div>
  );
  }
}
export default Search;
