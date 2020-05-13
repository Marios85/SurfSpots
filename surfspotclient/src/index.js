import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Spots from './components/Spots'
import Spot from './components/Spot'
import Layout from './components/Layout'
import Home from './components/Home'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import spotReducer from './reducers/spots'
const store = createStore(spotReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


function App() {
  return (
    <div>
      <Switch>
        <Route path="/Spots/Spot/:id" render={() => <Layout render={(props) => <Spot {...props} />} />} />
        <Route path="/Spots/:region" render={() => <Layout render={(props) => <Spots {...props} />} />} />
        <Route path="/Spots" render={() => <Layout render={(props) => <Spots {...props} />} />} />
        <Route path="/" render={() => <Layout render={() => <Home />} />} />
      </Switch>
    </div>
  );
}

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'));
