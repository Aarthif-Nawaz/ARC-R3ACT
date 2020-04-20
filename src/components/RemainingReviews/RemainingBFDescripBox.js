import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function RemainingBFDescripBox(props) {
  let history = useHistory();
  function handleClick() {
    history.push("");
  }

  return (
    <div class="searchBox">
      <div className="row">
        <div className="remainingReview">
          <h3 style={{ color: "#fff", fontWeight: 600 }}>Author name</h3>
          <h3 style={{ color: "#fff", fontWeight: 500 }}>01/01/2020</h3>
          <p style={{ fontSize: "1vw" }}>Version: 2.20.108</p>
          <div className="star" style={{ color: "#fff", marginBottom: "3%" }}>
            <label>★★★★★</label>
          </div>
          <div variant="secondary" className="m-1 remainingKeywordBtn">
            video
          </div>
          <p className="RemainingReviewText">
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
  );
}
export default RemainingBFDescripBox;
