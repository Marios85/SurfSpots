import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {Spots} from './components/Spots'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Content() {
    return (
      <Container className="App">
        <Navbar bg="dark" variant="dark">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
       </Navbar>
       <h1 className="text-left mt-3 mb-3">
         Surf Spots
       </h1>
       <Spots></Spots>
       <Button variant="primary">Primary</Button>
      </Container>
    );
  }
  
  export default Content;