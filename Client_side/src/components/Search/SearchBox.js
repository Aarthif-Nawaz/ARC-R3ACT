/* 
  Page      - SearchDescripBox.js page
  Function  - Displays each value of the props
  Parameter - @param {*} props
  Author    - Sajani Sihara, Christina Thambirajah
*/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown ,faStar} from "@fortawesome/free-solid-svg-icons";

function SearchBox(props) {
  return (
    <div>
      <div className= "mx-auto " style={{width:'650px'}}>
       <div className='container mb-3 border-bottom border-secondary'>
        <div className="row m-3">
          <div className="col-md-4 m-2">
           
            {" "}
            <img
             // className="searchAppsImages"
             className='img-responsive m-2  searchAppsImages'
             width="150px"
             height="150px"
              alt="search app logo"
              src={process.env.PUBLIC_URL + "/images/sajani.jpg"}
            />
          
            
          </div>
          <div className="col m-2">
          <div className="row m-2" >
          <h3 >
              facebook
            </h3>{" "}
            </div>
            <div className="row m-2" style={{ marginTop: "0.5vw" }}>
              <p>
                Facebook Developer
              </p>
            </div>
            <div className="row m-2" style={{ marginTop: "0.5vw" }}>
            <p  className='mr-3'>
              3.2<FontAwesomeIcon icon={ faStar } style={{ width: "2vw" }} /> 
              </p>
              <p className='mr-3'>
               Free
              </p>
              <p style={{ fontSize: "1.1vw" }} className='mr-3'>
              <FontAwesomeIcon icon={ faArrowCircleDown } style={{ width: "2vw" }} />100M+
              </p>
            </div>
          </div>
          <div className='col-6'>
           {/**Stars */}
          </div>
         
        </div> 
        <div className="row m-3">
          <div className='col'>
            <p>Work hard.Have fun.Make history</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default SearchBox;
