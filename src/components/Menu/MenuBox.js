import React from "react";
import { Link } from "react-router-dom";
import Footer from "../NavigationBar/Footer";

function MenuBox() {
  return (
    <div className='container-fluid'>
      <div class="bgimg-6">
        <div className=' col-md-9 MenuBoxPage'>
          <h3
            style={{
              textAlign: "center",
              fontWeight: 900,
              float: "left",
              padding: 50,
              fontSize:'2vw',
              marginTop: "12%",
            }}
          >
            What reviews would you like to see?
          </h3>

          <div className="row menuIntro">
            <div className='col mr-5'>
            The reviews of the mobile application are divided into three
            segments. Choose one of the following to see all the reviews
            relevant to that particular category.
            </div>
          </div>

          <div className="container MenuBoxContainer">
            <div class="row">
            <div class="col-lg-4 mb-2">
                <Link to="/bugfix">
                  <div className="card p-4">Bug Fixes</div>
                </Link>
              </div>
              <div class="col-lg-4 mb-2">
                <Link to="/featureRequest">
                <div className="card p-4">Feature Requests</div>
                </Link>
                </div>
              <div class="col-lg-4 mb-2">
                <Link to="/overallSentiment">
                <div className="card p-4">Overall Sentiment</div>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}
export default MenuBox;
