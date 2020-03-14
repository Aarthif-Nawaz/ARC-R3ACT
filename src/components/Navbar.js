import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
                <Nav className="mr-auto">
                    <Nav.Link >About Us</Nav.Link>
                    <Nav.Link >Support</Nav.Link>
                    <Nav.Link>Contact Us</Nav.Link>
                </Nav>
        
        </Navbar.Collapse>
      </Navbar> 
    );
}
export default NavBar;