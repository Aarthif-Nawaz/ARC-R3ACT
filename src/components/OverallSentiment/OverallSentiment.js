import React, { useEffect, useState } from "react";
import LoadingBox from "../Error/LoadingBox";
import ErrorPage from "../Error/Crashed";
import Footer from "../NavigationBar/Footer";

function OverallSentiment() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/app/com.facebook.orca")
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
        <div class="bgimg-16">
          {items.map((item) => (
            <div key={item._id} class="sentimentBox">
              <div className="row">
                <div className="col-3">
                  <div className="row m-2">
                    <img
                      src={item.icon}
                      style={{ borderRadius: "1.6vw", width: "10vw" }}
                    />
                  </div>
                  <div className="row m-2">
                    <h3 style={{ fontSize: "2.5vw" }}>{item.title}</h3>{" "}
                  </div>
                  <div className="row m-2">
                    <p className="sentimentInfo">{item.developer}</p>
                  </div>
                </div>
                <div className="col-4 sentimentInfo">
                  <div className="row" style={{margin:"2vw"}}>
                    <div className="col">Sentiment Score :</div>
                    <div className="col">
                      <div className="row">
                        <h1
                          style={{
                            borderRadius: "1.67vw",
                            width: "4vw",
                            height: "4vw",
                            backgroundColor: "#282e34",
                            padding: "1vw",
                            color: "#fff",
                            justifyContent: "center",
                            fontSize: "1.5vw",
                          }}
                        >
                          {item.scoreText}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="row m-3">
                    <div style={{ fontStyle: "italic" }}>"{item.summary}"</div>
                  </div>
                  <div className="row m-3">Genre : {item.genre}</div>
                  <div className="row m-3">Reviews : {item.reviews}</div>
                  <div className="row m-3">Installs : {item.installs}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}
export default OverallSentiment;
