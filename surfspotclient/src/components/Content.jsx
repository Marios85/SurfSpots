import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import {Spots} from './Spots'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Content extends React.Component {
    render() {
    return (
      <Container className="App">
        <Navbar bg="dark" variant="dark">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#Spots">Spots</Nav.Link>
        </Nav>
       </Navbar>
       <h1 className="text-left mt-3 mb-3">
         Surf Spots
       </h1>
       <Button variant="primary">Primary</Button>
      </Container>
    );
  }}
  
//   Content.contextTypes = {
//     router: React.PropTypes.object.isRequired
//   }
  export {Content};