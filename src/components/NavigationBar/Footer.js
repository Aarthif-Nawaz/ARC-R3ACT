import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faTwitter , faLinkedin, faGooglePlus  , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome , faEnvelope , faPhone  } from '@fortawesome/free-solid-svg-icons'



function Footer() {
  return (
    <div className="page-footer font-small unique-color-dark">
      <div style={{ backgroundColor: "#00498d" ,color:'#fff',height:"6vw"}}>
        <div className="container-fluid">
          <div className="row d-flex align-items-center" style={{padding:"1.5vw"}}>
            <div className="col-6 text-center text-left" style={{marginBottom:"7vw"}}>
              <h5 style={{fontSize:"1.3vw"}}>Get connected with us on social networks!</h5>
            </div>

            <div className="col-6 text-center text-right" style={{marginBottom:"7vw"}}>
              <a className="fb-ic mr-4">
              <FontAwesomeIcon icon={faFacebook} style={{width:"2vw"}}/>
              </a>

              <a className="tw-ic mr-4">
              <FontAwesomeIcon icon={faTwitter} style={{width:"2vw"}}/>
              </a>

              <a className="gplus-ic mr-4">
              <FontAwesomeIcon icon={faGooglePlus} style={{width:"2vw"}}/>
              </a>

              <a className="li-ic mr-4">
              <FontAwesomeIcon icon={faLinkedin}style={{width:"2vw"}}/>
              </a>

              <a className="ins-ic mr-4">
              <FontAwesomeIcon icon={faInstagram}style={{width:"2vw"}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#1c2431", color: "white" }}>
        <div className="container text-center text-left">
          <div className="row pt-5">

            <div className="col-3 mx-auto mb-4 text-left">
              <h6 className="text-uppercase" style={{fontSize:"1.5vw"}}>
                About ARC
              </h6>
              <hr
                className="accent-2 mt-0 d-inline-block mx-auto"
                style={{ width: "4vw", backgroundColor:'#fff' }}
              />
              <p style={{textAlign:"justify", fontSize:"1vw"}}>
                ARC analyses user reviews from the Google Play Store and
                suggests bug fixes, feature requests and the overall sentiment
                of a mobile app. Join ARC today to improve your customer
                experience.
              </p>
            </div>

            <div className="col-3 mx-auto mb-4">
              </div>
            <div className="col-3 mx-auto mb-4">
              <h6 className="text-uppercase" style={{fontSize:"1.5vw"}}>Explore</h6>
              <hr
                className="accent-2 mt-0 d-inline-block mx-auto"
                style={{ width: "4vw", backgroundColor:'#fff' }}
              />
              <p style={{marginBottom:"1.06vw",height:"2vw"}}>
                <a href="/" style={{color:"#fff", fontSize:"1.1vw"}}>Home</a>
              </p>
              <p style={{marginBottom:"1.06vw",height:"2vw"}}>
                <a href="/aboutus" style={{color:"#fff", fontSize:"1.1vw"}}>About</a>
              </p>
              <p style={{marginBottom:"1.06vw",height:"2vw"}}>
                <a href="/support" style={{color:"#fff", fontSize:"1.1vw"}}>Support</a>
              </p>
              <p style={{marginBottom:"1.06vw",height:"2vw"}}>
                <a href="/contact" style={{color:"#fff", fontSize:"1.1vw"}}>Contact</a>
              </p>
            </div>

            <div className="col-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase" style={{fontSize:"1.5vw"}}>Contact</h6>
              <hr
                className=" accent-2 mt-0 d-inline-block mx-auto"
                style={{ width: "4vw", backgroundColor: "#fff"}}
              />
              <p style={{fontSize:"1vw"}}>
                <FontAwesomeIcon icon={faHome}/> 244/3, Maharagama, Sri Lanka
              </p>
              <p style={{fontSize:"1vw"}}>
              <FontAwesomeIcon icon={faEnvelope}/> arc.r3act@gmail.com
              </p>
              <p style={{fontSize:"1vw"}}>
              <FontAwesomeIcon icon={faPhone}/> + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#151b27", color: "white",fontSize:"1vw" }}>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="!#"style={{color:"#fff",fontSize:"1vw"}}> applicationreviewclassifier.com</a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
