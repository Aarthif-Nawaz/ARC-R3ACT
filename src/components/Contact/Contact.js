import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../NavigationBar/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faTwitter , faLinkedin, faGooglePlus  , faInstagram } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <Container fluid style={{ boxSizing: "border-box" }}>
      <div class="bgimg-12">
        <div class="caption">
          <span className="border">We are always here to help you.</span>
        </div>
      </div>

      <div class="descrip-1">
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

        <form>
          <input
            class="commentInput"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name *"
            required
          ></input>
          <br></br>
          <br></br>
          <input
            class="commentInput"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address *"
            required
          ></input>
          <br></br>
          <br></br>
          <input
            class="commentInput"
            type="text"
            name="phone"
            placeholder="Phone Number"
          ></input>
          <br></br>
          <br></br>
          <input
            class="commentInput"
            type="text"
            name="message"
            placeholder="Message *"
            required
          ></input>
          <br></br>
          <br></br>
          <input
            class="commentSubmit"
            type="submit"
            placeholder="GET IN TOUCH"
            onclick="validateForm();"
          />
        </form>
      </div>
 
      <script>
			//this function is used to validate the input received by the form
			function validateForm(){
				var userInput = true;
				
				//declaring the variables for each input
				var userName = document.getElementById("name").value;
				var userEmail = document.getElementById("email").value;
				
				
				//validation for the email
				var atSymbol = userEmail.indexOf("@");
				var dotSymbol = userEmail.lastIndexOf(".");
				
				//validation for name, email and comment
				if (userName.length <= 0){
				alert("Please enter your name.");
				userInput = false;
				}
				else if (atSymbol == 0 || dotSymbol < +atSymbol + 2 || dotSymbol + 2 >= userEmail.length){
				alert("Please enter the email address.")
				userInput = false;
				}
				
				//once the validation is over, the following message will be printed
				if(userInput){
				var text = "Dear ";
				text += userName;
				text += ", your message has been received. We will get back to you shortly. ";
				alert(text);
				}
			}	
			</script>




      <div class="bgimg-13">
        <div class="caption">
          <span
            class="border"
            style={{
              backgroundColor: "#282e34",
              fontSize: "2vw",
              color: "#f7f7f7",
            }}
          >
            Connect with us and start improving your app today.
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="descrip-9">
          <div class="row">
            <div class="col d-flex align-items-stretch">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 30 }}>
                  Social Media
                </h3>

                <div className="text-center text-md-right">
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
            <div class="col d-flex align-items-stretch">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 30 }}>
                  Address
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                    fontWeight:500
                  }}
                >
                  244/3, Maharagama, Sri Lanka
                
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-stretch">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 30 }}>
                  Mobile Number
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                    fontWeight:500
                  }}
                >
                  + 01 234 567 88
                  
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-stretch">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 30 }}>
                  Email Address
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                    fontWeight:500
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
    </Container>
  );
}
export default Contact;
