/* 
  Page      - Navbar.js page
  Function  - This is the navigation bar component used in all the pages
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { elastic as Menu } from "react-burger-menu";
import "../../App.css";

function NavBar() {
  return (
    <Navbar id='navigation_bar'>
      {/*this is logo on the left side of the page, it's a link to the home page */}
      <Navbar.Brand href="/">
        <img
          className="bugLogo"
          src={process.env.PUBLIC_URL + "/images/logo1.png"}
          alt="ARC Logo"
          style={{ margin: "1.3vw", position: "absolute", zIndex: 1 }}
        />
      </Navbar.Brand>
      <div id="outer-container">
        {/*the right side nav bar has links to home, about, contact and support pages */}
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/aboutus">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a id="contact" className="menu-item" href="/support">
            Support
          </a>
        </Menu>
      </div>
    </Navbar>
  );
}
export default NavBar;
