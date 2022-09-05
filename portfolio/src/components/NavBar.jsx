import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";


const NavBar = () => {

  return (
    <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          DevArt
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto flex-grow-1 pe-3">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/skills">Skills</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/education">Education</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/experience">Experience</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects">Projects</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
