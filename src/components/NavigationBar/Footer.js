import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faTwitter , faLinkedin, faGooglePlus  , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome , faEnvelope , faPhone  } from '@fortawesome/free-solid-svg-icons'



function Footer() {
  return (
    <footer class="page-footer font-small unique-color-dark">
      <div style={{ backgroundColor: "#00498d" ,color:'#fff'}}>
        <div class="container">
          <div class="row py-4 d-flex align-items-center">
            <div class="col-md-6 col-lg-6 text-center text-md-left mb-4 mb-md-0">
              <h5 class="mb-0">Get connected with us on social networks!</h5>
            </div>

            <div class="col-md-6 col-lg-6 text-center text-md-right">
              <a class="fb-ic mr-4">
              <FontAwesomeIcon icon={faFacebook}/>
              </a>

              <a class="tw-ic mr-4">
              <FontAwesomeIcon icon={faTwitter}/>
              </a>

              <a class="gplus-ic mr-4">
              <FontAwesomeIcon icon={faGooglePlus}/>
              </a>

              <a class="li-ic mr-4">
              <FontAwesomeIcon icon={faLinkedin}/>
              </a>

              <a class="ins-ic mr-4">
              <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#1c2431", color: "white" }}>
        <div class="container text-center text-md-left">
          <div class="row pt-5">

            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 text-xl-left">
              <h6 class="text-uppercase" style={{fontSize:"1.5vw"}}>
                About ARC
              </h6>
              <hr
                class="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor:'#fff' }}
              />
              <p style={{textAlign:"justify"}}>
                ARC analyses user reviews from the Google Play Store and
                suggests bug fixes, feature requests and the overall sentiment
                of a mobile app. Join ARC today to improve your customer
                experience.
              </p>
            </div>

            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              </div>
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase" style={{fontSize:"1.5vw"}}>Explore</h6>
              <hr class=" accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px',backgroundColor:'#fff'}}/>
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

            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase" style={{fontSize:"1.5vw"}}>Contact</h6>
              <hr
                class=" accent-2 mb-4 mt-0 d-inline-block mx-auto"
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
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="!#"style={{color:"#fff"}}> applicationreviewclassifier.com</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
