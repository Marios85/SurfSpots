import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {Spots} from './components/Spots'
import {Content} from './components/Content'
import {Route, HashRouter, Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <Switch>
        <Route path="/Spots">
          <Spots />
        </Route>
        <Route path="/">
          <Content />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render((
    <HashRouter>
    <App/>
  </HashRouter>
  ), document.getElementById('root'));
