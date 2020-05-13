import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GroupBy } from '../helper'
import { connect } from 'react-redux'
import { fetchspots } from '../reducers/spots'


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
const data = require('../spots.json')

class Layout extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchspots(data.spots))
  }


  render() {
    let regions = () => {
      var items = []
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