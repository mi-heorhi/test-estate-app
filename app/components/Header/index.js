import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand>Estate App</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to={`/rent`}>Rent</Link>
          <Link className="nav-link" to={`/bye`}>Bye</Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Navbar>
    );
  }
}

export default Header;
