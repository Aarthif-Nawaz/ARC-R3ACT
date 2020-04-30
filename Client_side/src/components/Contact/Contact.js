/* 
  Page      - Contact.js page
  Function  - Provides contact information regarding ARC 
  Author    - Sajani Sihara
*/

import React from "react";
import Footer from "../NavigationBar/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGooglePlus,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form.js";
import { Helmet } from "react-helmet";

const TITLE = "Contact | ARC";

//Function Contact
function Contact() {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="icon" href="images/logo1.png" sizes="16x16"></link>
      </Helmet>
      {/*Adding the background image*/}
      <div className="bgimg-12">
        {/*Adding the main heading */}
        <div className="caption">
          <span className="border">
            Connect with us and start improving your app today.
          </span>
        </div>
      </div>
       {/*Adding a div that will hold the comment form */}
       <div className="descrip-1 row ">
        <div className="col-6"  style={{ float: "left"}}>
          <div id = {"contactDescription"} style ={{margin:"1vw",padding: "2vw",width:"30vw",marginLeft:"8vw"}}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.5vw",
              fontWeight: 700,
              paddingBottom: 30,
              color:"#FFFFFF"
            }}
          >
            Contact details
          </h3>
          <div style={{ textAlign: "left"}}>
            <p
              style={{
                fontSize: "1.3vw",
                fontWeight: 600,
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> Email address{" "}
            </p>
            <p
              style={{
                fontSize: "1vw", paddingLeft:"2vw"
              }}
            >
              arc.r3act@gmail.com
            </p>
            <p
              style={{
                fontSize: "1.3vw",
                fontWeight: 600,
              }}
            >
              <FontAwesomeIcon icon={faPhone} /> Mobile Number{" "}
            </p>

            <p
              style={{
                fontSize: "1vw",paddingLeft:"2vw"
              }}
            >
              {" "}
              + 01 234 567 88
            </p>
            <p
              style={{
                fontSize: "1.3vw",
                fontWeight: 600,
              }}
            >
              <FontAwesomeIcon icon={faHome} /> Post address{" "}
            </p>
            <p  style={{
                fontSize: "1vw",paddingLeft:"2vw"
              }}> 244/3, Maharagama, Sri Lanka</p>
            <p
              style={{
                fontSize: "1.3vw",
                fontWeight: 600,
              }}
            >
              Social Media{" "}
            </p>
            <p style={{paddingLeft:"2vw"}}>
              <a className="fb-ic">
                <FontAwesomeIcon icon={faFacebook} style={{ width: "2vw", marginRight:"2vw" }} />
              </a>

              <a className="tw-ic">
                <FontAwesomeIcon icon={faTwitter} style={{ width: "2vw",marginRight:"2vw" }} />
              </a>

              <a className="gplus-ic">
                <FontAwesomeIcon icon={faGooglePlus} style={{ width: "2vw",marginRight:"2vw" }} />
              </a>

              <a className="li-ic">
                <FontAwesomeIcon icon={faLinkedin} style={{ width: "2vw",marginRight:"2vw" }} />
              </a>

              <a className="ins-ic">
                <FontAwesomeIcon icon={faInstagram} style={{ width: "2vw",marginRight:"2vw" }} />
              </a>
            </p>
          </div>
        </div>
        </div>
        <div className="col-6"style={{ float: "right" }}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "2vw",
              fontWeight: 700,
              paddingBottom: 30,
            }}
          >
            Send us your questions here
          </h3>
          {/*Adding the form component */}
          <Form />
        </div>
      </div>
      {/*adding the footer component */}
      <Footer />
    </div>
  );
}
export default Contact;
