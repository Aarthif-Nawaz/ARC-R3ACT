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

//Function Contact
function Contact() {
  return (
    <div className="container-fluid" style={{ boxSizing: "border-box" }}>
      <div className="bgimg-12">
        <div className="caption">
          <span className="border">
            Connect with us and start improving your app today.
          </span>
        </div>
      </div>

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

        <Form />
      </div>

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
        <div className="descrip-9">
          <div className="row">
            <div className="col d-flex align-items-stretch">
              <div className="card">
                <h3 style={{ fontWeight: 700, paddingBottom: "2vw" }}>
                  Social Media
                </h3>

                <div className="text-center text-md-right row">
                  <a className="fb-ic col-2.4" style={{ marginRight: "1vw" }}>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ width: "1vw" }}
                    />
                  </a>

                  <a className="tw-ic col-2.4">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ width: "1vw", marginRight: "1vw" }}
                    />
                  </a>

                  <a className="gplus-ic col-2.4">
                    <FontAwesomeIcon
                      icon={faGooglePlus}
                      style={{ width: "1vw", marginRight: "1vw" }}
                    />
                  </a>

                  <a className="li-ic col-2.4">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "1vw", marginRight: "1vw" }}
                    />
                  </a>

                  <a className="ins-ic col-2.4">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ width: "1vw" }}
                    />
                  </a>
                </div>
              </div>
            </div>
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

      <Footer />
    </div>
  );
}
export default Contact;
