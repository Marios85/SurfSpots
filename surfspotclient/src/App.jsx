import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {Spots} from './components/Spots'
import {Content} from './components/Content'
//import {History} from 'history'
import {ReactRouter,Router, Route,IndexRoute,browserHistory} from 'react-router'


let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false
})

ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={Content}>
      <Route path="/spots" component={Spots}>
        {/* <Route path=":id" component={Movie} /> */}
      </Route>
    </Route>
  </Router>
  ), document.getElementById('content'));
