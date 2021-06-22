import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-4" href="#about">About</Nav.Link>
            <Nav.Link className="mr-4" href="#home">Home</Nav.Link>
            <Nav.Link className="mr-4" href="#dentalService">Dental Services</Nav.Link>
            <Nav.Link className="mr-4 text-white" href="#reviews">Reviews</Nav.Link>
            <Nav.Link className="mr-4 text-white" href="#blog">Blog</Nav.Link>
            <Nav.Link className="mr-4 text-white" href="#contactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
