import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GroupBy} from '../helper'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Layout extends React.Component{
 
    render(){
      let regions = () => { var items = []
         for(var key in GroupBy(this.props.spots, "region"))
      { items.push(<NavDropdown.Item key={"navdd"+key} href={"#Spots/"+key}>{key}</NavDropdown.Item>)}
      return items
    }
      //console.log(regions)
        return(
          <Container>
            <Navbar bg="dark" variant="dark">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#Spots">Spots</Nav.Link>
            </Nav>
            <Nav>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              {regions()}
            </NavDropdown>
            </Nav>
           </Navbar>
           {this.props.children}
          </Container>
           
            );}
}

export {Layout};