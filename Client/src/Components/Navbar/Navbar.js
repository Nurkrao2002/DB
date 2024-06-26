import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react'
import "./Navbar.css"

function NavScrollExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid id='navbarmain'>
        <Navbar.Brand id='databasename' href="/">DataBase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav id='navlinkitems'
            className="me-auto my-2 my-lg-0 navlinkitems"
            style={{maxHeight: '100px'}}
            >
            <Nav.Link id='itemss' href="/">Home</Nav.Link>
            <Nav.Link id='itemss' href="/about">About</Nav.Link>
            <Nav.Link id='itemss' href="/Services">Services</Nav.Link>
            <Nav.Link id='itemss' href="/Queries">Queries</Nav.Link>
            <Nav.Link id='itemss' href="/contact">Contact</Nav.Link>
          </Nav>
          <Form id='searchbarb' className="d-flex ms-auto" action="https://www.google.com/search" method="get" target="_blank">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="q"  // This is the key change
              />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScrollExample;