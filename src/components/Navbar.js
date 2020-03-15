import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Navbar className="navBar">
      <Navbar.Brand href="/">
        <img
          className="bugLogo"
          src={process.env.PUBLIC_URL + "/images/bugLogo.png"}
          alt="ARC Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" className="navLinks">
          <Nav.Link className="navOneLink">About </Nav.Link>
          <Nav.Link className="navOneLink">Support</Nav.Link>
          <Nav.Link className="navOneLink">Contact </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
