import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { userContext } from "../../../App";
import { handleSignOut } from "../../New folder/firebase/FirebaseAuth";
const NavBar = () => {
  const {loggedInUser, setLoggedInUser, setAdmin } = useContext(userContext);

  const logOut = () => {
    handleSignOut().then((res) => {
      setAdmin(false);
      setLoggedInUser({});
    });
};
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Nav className="ml-auto">           
            <Nav.Link className="mr-4" href="/home">Home</Nav.Link>
            <Nav.Link className="mr-4" href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link className="mr-4" href="/dashboard">Admin</Nav.Link>
            <Nav.Link className="mr-4 text-white" href="/blogs">Blog</Nav.Link>
            <Nav.Link className="mr-4 text-white" href="/contact">Contact Us</Nav.Link>
           
            {
              loggedInUser?.email ? (<Nav.Link className="mr-4 text-white" href="/" onClick={logOut}>LogOut</Nav.Link>):(<Nav.Link className="mr-4 text-white" href="/logIn">Login</Nav.Link>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
