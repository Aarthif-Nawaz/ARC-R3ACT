import React from "react";
function Footer() {
  return (
    <footer class="page-footer font-small unique-color-dark">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div style={{ backgroundColor: "#6351ce" }}>
        <div class="container">
          <div class="row py-4 d-flex align-items-center">
            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 class="mb-0">Get connected with us on social networks!</h6>
            </div>

            <div class="col-md-6 col-lg-7 text-center text-md-right">
              <a class="fb-ic">
                <i class="fab fa-facebook-f white-text mr-4"> </i>
              </a>

              <a class="tw-ic">
                <i class="fab fa-twitter white-text mr-4"> </i>
              </a>

              <a class="gplus-ic">
                <i class="fab fa-google-plus-g white-text mr-4"> </i>
              </a>

              <a class="li-ic">
                <i class="fab fa-linkedin-in white-text mr-4"> </i>
              </a>

              <a class="ins-ic">
                <i class="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#1c2431", color: "white" }}>
        <div class="container text-center text-md-left mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase font-weight-bold">
                Application Review Classifier
              </h6>
              <hr
                class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                ARC analyses user reviews from the Google Play Store and
                suggests bug fixes, feature requests and the overall sentiment
                of a mobile app. Join ARC today to improve your customer
                experience.
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <a href="#!">Home</a>
              </p>
              <p>
                <a href="#!">About</a>
              </p>
              <p>
                <a href="#!">Support</a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              <hr
                class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, color: "red" }}
              />
              <p>
                <i class="fas fa-home mr-3"></i> 244/3, Maharagama, Sri Lanka
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i> arc.r3act@gmail.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#151b27", color: "white" }}>
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="!#"> applicationreviewclassifier.com</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
