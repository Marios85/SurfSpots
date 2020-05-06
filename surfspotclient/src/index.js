import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {Spots} from './components/Spots'
import {Spot} from './components/Spot'
import {Content} from './components/Content'
import {Route, HashRouter, Switch} from 'react-router-dom'
import data from './spots.json'
//const spots = require('./components/spots.js')

function App() {
  return (
    <div>
      <Switch>
      <Route path="/Spots/:id" render={(props) => <Spot spots={data.spots} {...props}/>}/>
      {/* <Spot  spots={data.spots} ></Spot>
      </Route> */}
      <Route path="/Spots" >
          <Spots spots={data.spots}> </Spots>
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
