import React from "react";
import { Link } from "react-router-dom";
import Footer from "../NavigationBar/Footer";

function IndividualReview() {
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

          <div className="reviewBox">
            <h3 style={{ fontWeight: 600 }}>Author name</h3>
            <h3 style={{ fontWeight: 500 }}>01/01/2020</h3>
            <p style={{fontSize:"1vw",marginBottom: "1vw"}}>Version: 2.20.108</p>
            <div className="star" style={{ color: "#000", marginBottom: "3%" }}>
              <label>★★★★★</label>
            </div>
            <div variant="secondary" className=" individualKeywordBtn">
              video
            </div>
            <p className="reviewText" style={{ fontSize: "1.1vw" }}>
              The reviews of the mobile application are divided into three
              segments. Choose one of the following to see all the reviews
              relevant to that particular category. The reviews of the mobile
              application are divided into three segments. Choose one of the
              following to see all the reviews relevant to that particular
              category.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default IndividualReview;
