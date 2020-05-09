import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Spots from './components/Spots'
import {Spot} from './components/Spot'
import {Layout} from './components/Layout'
import {Home} from './components/Home'
import {Route, HashRouter, Switch} from 'react-router-dom'
import data from './spots.json'

function App() {
  return (
    <div>
      <Switch>
      <Route path="/Spots/Spot/:id" render={(props) => <Layout spots={data.spots} {...props}> <Spot spots={data.spots} {...props}/> </Layout>}/>
      <Route path="/Spots/:region" render={(props) => <Layout spots={data.spots} {...props}> <Spots spots={data.spots} {...props}/> </Layout>}/>
      <Route path="/Spots" render={(props) => <Layout spots={data.spots}  {...props}><Spots spots={data.spots}  {...props}/> </Layout>} >
        </Route>
        <Route path="/" render={(props) => <Layout spots={data.spots} {...props}><Home></Home> </Layout>}/>        
      </Switch>
    </div>
  );
}

ReactDOM.render((
    <HashRouter>
    <App/>
  </HashRouter>
  ), document.getElementById('root'));
