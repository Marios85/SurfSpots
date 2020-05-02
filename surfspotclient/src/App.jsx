import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="primary">Primary</Button>
      </header>
    </Container>
  );
}

export default App;
