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
    <div className="container-fluid" style={{ boxSizing: "border-box" }}>
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
      <div className="descrip-1">
        <div style={{ float: "left" }}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "2vw",
              fontWeight: 700,
              paddingBottom: 30,
            }}
          >
            Contact details
          </h3>
          <div style={{ textAlign: "left", padding: "1vh" }}>
            <p
              style={{
                fontSize: "1.5vw",
                fontWeight: 600,
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> Email address{" "}
            </p>
            <p
              style={{
                fontSize: "1.3vw",
              }}
            >
              arc.r3act@gmail.com
            </p>
            <p
              style={{
                fontSize: "1.5vw",
                fontWeight: 600,
              }}
            >
              <FontAwesomeIcon icon={faPhone} /> Mobile Number{" "}
            </p>

            <p
              style={{
                fontSize: "1.3vw",
              }}
            >
              {" "}
              + 01 234 567 88
            </p>
            <p
              style={{
                fontSize: "1.5vw",
                fontWeight: 600,
              }}
            >
              <FontAwesomeIcon icon={faHome} /> Post address{" "}
            </p>
            <p> 244/3, Maharagama, Sri Lanka</p>
            <p
              style={{
                fontSize: "1.5vw",
                fontWeight: 600,
              }}
            >
              Social Media{" "}
            </p>
            <p>
              <a className="fb-ic mr-4">
                <FontAwesomeIcon icon={faFacebook} style={{ width: "2vw" }} />
              </a>

              <a className="tw-ic mr-4">
                <FontAwesomeIcon icon={faTwitter} style={{ width: "2vw" }} />
              </a>

              <a className="gplus-ic mr-4">
                <FontAwesomeIcon icon={faGooglePlus} style={{ width: "2vw" }} />
              </a>

              <a className="li-ic mr-4">
                <FontAwesomeIcon icon={faLinkedin} style={{ width: "2vw" }} />
              </a>

              <a className="ins-ic mr-4">
                <FontAwesomeIcon icon={faInstagram} style={{ width: "2vw" }} />
              </a>
            </p>
          </div>
        </div>
        <div style={{ float: "right" }}>
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

      {/*Adding the footer component */}
    </div>
  );
}
export default Contact;
