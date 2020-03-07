import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">ARC Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
                <Nav className="mr-auto">
                    <Nav.Link >Navigation Link</Nav.Link>
                    <Nav.Link >Navigation Link</Nav.Link>
                    <Nav.Link>Navigation Link</Nav.Link>
                </Nav>
        
        </Navbar.Collapse>
      </Navbar> 
    );
}
export default NavBar;