import React, { useEffect, useState } from "react";
import { Link,useLocation} from "react-router-dom";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import "bootstrap/dist/css/bootstrap.min.css";
import DescripBox from "./DescripBox";
import Button from "react-bootstrap/Button";
import "../../App.css";
import Footer from "../NavigationBar/Footer";

function BugFix() {
  let location = useLocation();
  const currentURL = location.pathname;
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  //Get localstorage value of appName
  
  const app =  localStorage.getItem('appName');
  console.log(app);

  useEffect(() => {
    fetch("http://localhost:5000/bugfixes/keywords/"+app)
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

  if (error) {
    return <ErrorPage errorDet={error.message} />;
  } else if (!isLoaded) {
    return <LoadingBox />;
  } else {
  return (
    <div>
      <div class="bgimg-14">
        <div class="caption">
          <span className="border">
            Bug fixes requested by the users of this app
          </span>
        </div>
      </div>
      <div>
      {items.map((item) => (
              <div key={item} style={{ listStyleType: "none" }}>
                <div className={"descrip-" + (items.indexOf(item) % 2 ? "10" : "11")}>
                  {/* author={item.userName} date={item.date} score={item.rating} text={item.text} */}

                  <DescripBox  type='bugfix' keywords={item[0]} points={item[1]} />
                </div>
              </div>
            ))}
        
        <div className="descrip-11">
          <div className="container text-center">
            <Link to={{
              pathname:currentURL+'/remainingBF'
            }}>
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
