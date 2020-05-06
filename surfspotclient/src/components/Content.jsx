import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

import Container from 'react-bootstrap/Container'
import Layout from './Layout'

class Content extends React.Component {
    render() {
    return (
        <Layout>
      <Container className="App">
       <h1 className="text-left mt-3 mb-3">
         Marios's Surf Directory
       </h1>
       <p className="text-left">A repository for surf spots</p>
      </Container>
      </Layout>
    );
  }}
  
  
//   Content.contextTypes = {
//     router: React.PropTypes.object.isRequired
//   }
  export {Content};