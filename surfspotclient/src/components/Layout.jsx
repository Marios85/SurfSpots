import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GroupBy } from '../helper'
import { connect } from 'react-redux'
import { fetchspots } from '../reducers/spots'
import axios from 'axios'
import {Constants} from '../constants'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'


class Layout extends React.Component {
  
  componentDidMount() {
    axios.get(Constants.webApiUrl+'spots', {	headers: {
      'Access-Control-Allow-Origin': '*',
    }}).then((response) => {
      console.log(response.data)
      this.props.dispatch(fetchspots(response.data))
      // mode: 'no-cors'
    })
  }


  render() {
    let regions = () => {
      var items = []
      if(this.props.spots != null)
        for (var key in GroupBy(this.props.spots, "region")) { items.push(<NavDropdown.Item key={"navdd" + key} href={"#Spots/" + key}>{key}</NavDropdown.Item>) }
      return items
    }

    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Spots">Spots</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Regions" id="collapsible-nav-dropdown">
              {regions()}
            </NavDropdown>
          </Nav>
        </Navbar>
        {this.props.render(this.props)}
      </Container>

    );
  }
}

const mapStateToProps = state => {
  return { spots: state.spots };
};

export default connect(mapStateToProps)(Layout);