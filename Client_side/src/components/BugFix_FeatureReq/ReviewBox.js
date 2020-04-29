/* 
  Page        - DescripBox.js page
  Function    - Description component for bug fix page, feature request
  Parameter   - @param {*} props
  Author      - Sajani Sihara, Ridmi Amasha
*/

import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function ReviewBox(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
   
      <div className="center-content">
        <div className="row m-1">
          <div className="col">
            <div className="container pb-4 mb-4 border-bottom border-secondary main">
              <div className='row' >
                <div className='col-10'>
                <h3>Sajani Sihara</h3>
                </div>
               <div className='col'>
                <p style={{ fontSize: "1.3rem" }} className="mr-3">
                    3.2
                    <FontAwesomeIcon icon={faStar} style={{ width: "2vw" }} />
                  </p>
               </div>

               
              </div>
              <div className='row m-1'>
              <p className="mb-3" style={{ fontSize: "1.3rem" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              </div>
             <div className='row'>
               <div className='col-9'> <p className='pt-2'style={{ fontSize: "1.3rem" }}>10/05/2020</p>
                
               </div>
               <div className='col'>
               <Button
                variant="secondary"
                id="DescripBtn"
                className={"mx-2 DescripBtn"}
                onClick={()=>setModalShow(true)}
              >
                View Full Review
              </Button>
                    <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
                    </div>
             </div>
             
             
            </div>
          </div>
        </div>
      </div>
   
  );
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h3>Sajani Sihara</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
          <div className='col-10'> <p style={{ fontSize: "1.3rem" }}>10/05/2020 </p></div>
          <div className='col'>
          <p style={{ fontSize: "1.3rem" }} className="mr-3">
                    3.2
                    <FontAwesomeIcon icon={faStar} style={{ width: "2vw" }} />
                  </p>
          </div>
        </div>
        
        <p style={{ fontSize: "1.3rem" }}>App Version : 3.0.1 </p>
        <p style={{ fontSize: "1.3rem" }}>
        Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReviewBox;
