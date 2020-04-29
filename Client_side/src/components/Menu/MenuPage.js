/* 
  Page        - DescripBox.js page
  Function    - Description component for bug fix page, feature request
  Parameter   - @param {*} props
  Author      - Sajani Sihara, Ridmi Amasha
*/

import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload,faComments,faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";

function MenuPage(props) {
  return (
    <div>
      {/*Adding the background image*/}
      <div className="container-fluid">
        <div className="bgimg-6">
          <div className=" col-6">
            <div className="row m-3">
              <div className="col-md-4 m-2">
                {" "}
                <img
                  // className="searchAppsImages"
                  className="img-responsive m-2  searchAppsImages"
                  width="150px"
                  height="150px"
                  alt="search app logo"
                  src={process.env.PUBLIC_URL + "/images/sajani.jpg"}
                />
              </div>
              <div className="col m-3">
                <p><h3>facebook</h3>{" "}</p>
                <p style={{ fontSize: "1.3rem" }}>Facebook Developer</p>
                <p style={{ fontSize: "1.3rem" }}>Social Media Messenger</p>
              </div>
            </div>
            <div className="row m-3">
              <div className="col-md-4 m-3">
                <p style={{ fontSize: "1.3rem" }}>
                <FontAwesomeIcon icon={faComments} className='pr-2' style={{ width: "2vw" ,color:'#282e34'}} />
                  3M Reviews</p>
                <p style={{ fontSize: "1.3rem" }}>
                <FontAwesomeIcon icon={faDownload}  className='pr-2' style={{ width: "2vw" ,color:'#282e34' }} />60.0MB</p>
                <p style={{ fontSize: "1.3rem" }}>
                <FontAwesomeIcon icon={faArrowCircleDown} className='pr-2' style={{ width: "2vw" ,color:'#282e34' }} />100M+</p>
              </div>
              <div className="col">
              
                <div
                  id='DescripBtn'
                  style={{ width: "150px", height: "150px", border:'#fff 0.1vw solid',borderRadius:'0.6vw', boxShadow: '0 0.2vw 0.5vw 0 rgba(12, 10, 10, 0.897)' }}
                >
                  <p style={{textAlign:'center'}}>Rating </p>
                 <h3 style={{fontSize:'5rem',textAlign:'center', color:'#fff'}}>3/5</h3>
                  
                </div>
              </div>
            </div>
            <div className="row m-3">
              <div className="col-md-4 m-3">
                <button className="card p-3" style={{ fontSize: "1vw",textTransform:'uppercase' }}>Bug Fixes</button>
              </div>
              <div className="col-md-4">
                <button className="card p-3" style={{ fontSize: "1vw",textTransform:'uppercase' }}>Feature Requests</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuPage;
