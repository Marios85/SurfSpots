import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class Layout extends React.Component{

    render(){
        return(
          <Container>
            <Navbar bg="dark" variant="dark">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#Spots">Spots</Nav.Link>
            </Nav>
           </Navbar>
           {this.props.children}
          </Container>
           
            );}
}

export default Layout;