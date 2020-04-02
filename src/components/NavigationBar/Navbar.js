import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { elastic as Menu } from "react-burger-menu";
import "../../App.css";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <img
          className="bugLogo"
          src={process.env.PUBLIC_URL + "/images/logo1.png"}
          alt="ARC Logo"
          style={{ margin: 20, position: "absolute", zIndex: 1000 }}
        />
      </Navbar.Brand>
      <div id="outer-container">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
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
