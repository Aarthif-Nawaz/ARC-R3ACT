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

      {/*The second background image */}
      <div className="bgimg-13">
        <div className="caption">
          <span
            className="border"
            style={{
              backgroundColor: "#282e34",
              fontSize: "2vw",
              color: "#f7f7f7",
            }}
          >
            We are always here to help you.
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        {/*Starting a div to hold the contact information */}
        <div className="descrip-9">
          <div className="row">
            {/*First column contains the social media links */}
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <h3 style={{ fontWeight: 700, paddingBottom: "2vw" }}>
                  Social Media
                </h3>

                {/*Facebook link */}
                <div className="text-center text-md-right row">
                  <a className="fb-ic col-2.4" style={{ marginRight: "1vw" }}>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ width: "1vw" }}
                    />
                  </a>

                  {/*Twitter link */}
                  <a className="tw-ic col-2.4">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ width: "1vw", marginRight: "1vw" }}
                    />
                  </a>

                  {/*Google Plus link */}
                  <a className="gplus-ic col-2.4">
                    <FontAwesomeIcon
                      icon={faGooglePlus}
                      style={{ width: "1vw", marginRight: "1vw" }}
                    />
                  </a>

                  {/*Linkedin link */}
                  <a className="li-ic col-2.4">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "1vw", marginRight: "1vw" }}
                    />
                  </a>

                  {/*Instagram link */}
                  <a className="ins-ic col-2.4">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ width: "1vw" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/*Second column contains the post address of ARC */}
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <h3 style={{ fontWeight: 700, paddingBottom: "2vw" }}>
                  Address
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                    fontWeight: 500,
                  }}
                >
                  244/3, Maharagama, Sri Lanka
                </p>
              </div>
            </div>

            {/* Third column contains the mobile number of ARC */}
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <h3 style={{ fontWeight: 700, paddingBottom: "2vw" }}>
                  Mobile Number
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                    fontWeight: 500,
                  }}
                >
                  + 01 234 567 88
                </p>
              </div>
            </div>

            {/*Fourth colum contains the email address of ARC */}
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <h3 style={{ fontWeight: 700, paddingBottom: "2vw" }}>
                  Email Address
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                    fontWeight: 500,
                  }}
                >
                  arc.r3act@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Adding the footer component */}
      <Footer />
    </div>
  );
}
export default Contact;
