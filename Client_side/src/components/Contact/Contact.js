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

      {/*Adding the footer component */}
      <Footer />
    </div>
  );
}
export default Contact;
