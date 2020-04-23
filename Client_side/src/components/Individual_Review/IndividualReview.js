import React ,{useState,useEffect}from "react";
import { Link,useLocation } from "react-router-dom";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import Footer from "../NavigationBar/Footer";
import Review from '../Review/Review.js'

function IndividualReview(props) {

  const {id} = props.location.state;
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
 

  useEffect(() => {
    fetch('http://localhost:5000/featurereqs/fullreview/com.android.chrome/'+id)
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
    <div className="container-fluid">
      <div class="bgimg-17">
        <div className=" col MenuBoxPage">
          <h3
            style={{
              textAlign: "center",
              fontWeight: 700,
              float: "left",
              padding: "1.3vw",
              fontSize: "2vw",
              marginTop: "12%",
            }}
          >
            Take a look at the complete review here
          </h3>
          {items.map((item) => (
              <div key={items.reviewId}>
                
                
                  {/* <Review
                    id={item.reviewId}
                    author={item.username}
                    date={item.date}
                    score={item.rating}
                    text={item.text}
                  /> */}
                   <div className="reviewBox">
            <h3 style={{ fontWeight: 600 }}>{item.username}</h3>
            <h3 style={{ fontWeight: 500 }}>{item.date}</h3>
            <p style={{fontSize:"1vw",marginBottom: "1vw"}}>Version: {item.version}</p>
            <div className="star" style={{ color: "#000", marginBottom: "3%" }}>
              <label>★★★★★</label>
            </div>
            {/* <div variant="secondary" className=" individualKeywordBtn">
              video
            </div> */}
            <p className="reviewText" style={{ fontSize: "1.1vw" }}>
             {item.text}
            </p>
          </div>
                </div>
             
            ))}

         
        </div>
      </div>
      <Footer />
    </div>
  );
}
}
export default IndividualReview;
