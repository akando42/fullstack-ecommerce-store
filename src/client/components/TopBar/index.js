import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,FormControl,Form,InputGroup,Button,Span} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import 'bootstrap/dist/css/bootstrap.min.css';

class TopBar extends Component {
  render() {
    return (
      <Navbar className="topBar" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home" id="shopBrand">FORTURING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#kids">Kids</Nav.Link>
            <Nav.Link href="#shoes">Shoes</Nav.Link>
            <Nav.Link href="#shoes">Brands</Nav.Link>
          </Nav>
          <Form inline>
            <InputGroup className="shopping-search">
              <InputGroup.Prepend>
                <InputGroup.Text className="searchIcon">
                  <FontAwesomeIcon icon={faSearch} size="1x" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl type="text" placeholder="search anything" className="mr-sm-2 searchInput" />
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBar;