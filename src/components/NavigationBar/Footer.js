import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faTwitter , faLinkedin, faGooglePlus  , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome , faEnvelope , faPhone  } from '@fortawesome/free-solid-svg-icons'



function Footer() {
  return (
    <div className="page-footer font-small unique-color-dark">
      <div style={{ backgroundColor: "#00498d" ,color:'#fff'}}>
        <div className="container-fluid">
          <div className="row py-4 px-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-6 text-center text-md-left mb-4 mb-md-0">
              <h5>Get connected with us on social networks!</h5>
            </div>

            <div className="col-md-6 col-lg-6 text-center text-md-right">
              <a className="fb-ic mr-4">
              <FontAwesomeIcon icon={faFacebook}/>
              </a>

              <a className="tw-ic mr-4">
              <FontAwesomeIcon icon={faTwitter}/>
              </a>

              <a className="gplus-ic mr-4">
              <FontAwesomeIcon icon={faGooglePlus}/>
              </a>

              <a className="li-ic mr-4">
              <FontAwesomeIcon icon={faLinkedin}/>
              </a>

              <a className="ins-ic mr-4">
              <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#1c2431", color: "white" }}>
        <div className="container text-center text-md-left">
          <div className="row pt-5">

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 text-xl-left">
              <h6 className="text-uppercase" style={{fontSize:"1.5vw"}}>
                About ARC
              </h6>
              <hr
                className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor:'#fff' }}
              />
              <p style={{textAlign:"justify"}}>
                ARC analyses user reviews from the Google Play Store and
                suggests bug fixes, feature requests and the overall sentiment
                of a mobile app. Join ARC today to improve your customer
                experience.
              </p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase" style={{fontSize:"1.5vw"}}>Explore</h6>
              <hr
                className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor:'#fff' }}
              />
              <p>
                <a href="#!" style={{color:"#fff", fontSize:"1.1vw"}}>Home</a>
              </p>
              <p>
                <a href="#!" style={{color:"#fff", fontSize:"1.1vw"}}>About</a>
              </p>
              <p>
                <a href="#!" style={{color:"#fff", fontSize:"1.1vw"}}>Support</a>
              </p>
              <p>
                <a href="#!" style={{color:"#fff", fontSize:"1.1vw"}}>Contact</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase" style={{fontSize:"1.5vw"}}>Contact</h6>
              <hr
                className=" accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#fff" }}
              />
              <p>
                <FontAwesomeIcon icon={faHome}/> 244/3, Maharagama, Sri Lanka
              </p>
              <p>
              <FontAwesomeIcon icon={faEnvelope}/> arc.r3act@gmail.com
              </p>
              <p>
              <FontAwesomeIcon icon={faPhone}/> + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#151b27", color: "white" }}>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="!#"style={{color:"#fff"}}> applicationreviewclassifier.com</a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
