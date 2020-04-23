import React, { useEffect, useState } from "react";
import Review from "./Review";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import Footer from "../NavigationBar/Footer";

function ViewAllReviews(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
 

  const {urlLink} = props.location.state;
  const {keyword} = props.location.state;
  console.log(urlLink)
  useEffect(() => {
    fetch(urlLink)
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
        <div class="bgimg-5">
          <div class="caption">
            <span className="border">
    Reviews addressing "{keyword}"
            </span>
          </div>
        </div>
        <div>
          <ul>
            {items.map((item) => (
              <li key={items._id} style={{ listStyleType: "none" }}>
                <div className={"descrip-" + (items.indexOf(item) % 2 ? "4" : "5")}>
                  {/* author={item.userName} date={item.date} score={item.rating} text={item.text} */}

                  <Review
                    id={item._id}
                    author={item.username}
                    date={item.date}
                    score={item.rating}
                    text={item.partReview}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    );
            

  }
}
export default ViewAllReviews;
