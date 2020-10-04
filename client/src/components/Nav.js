import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/user">Coach Center</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/gymnasts">Gymnasts</Nav.Link>
          <Nav.Link href="/lessonplans">Lessons Plans</Nav.Link>
          <Nav.Link href="/competitions">Competitions</Nav.Link>
        </Nav>
        <Navbar.Text>
        Signed in as: <a href="#">User name</a>
      </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;