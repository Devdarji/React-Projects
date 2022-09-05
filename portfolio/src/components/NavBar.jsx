import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import endpoints from "../constants/EndPoint";
import "../css/navbar.css";

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const NavBar = () => {

  

  return (
    <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        {/* {data?.logo && ( */}
        <Navbar.Brand href="/">
          {/* <img
              src={data?.logo?.source}
              className="d-inline-block align-top"
              alt="main logo"
              style={
                data?.logo?.height && data?.logo?.width
                  ? { height: data?.logo?.height, width: data?.logo?.width }
                  : styles.logoStyle
              }
            /> */}
          DevArt
        </Navbar.Brand>
        {/* )} */}
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

// const NavBarWithRouter = Navigate(NavBar);
export default NavBar;
