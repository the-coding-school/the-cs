import React from 'react';
import ReactDOM from 'react-dom';
import Skeleton from "./modules/Skeleton";
import Home from './modules/Home';
import About from './modules/About';
import Team from './modules/Team';
import Classes from "./modules/Classes"
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={Skeleton}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/classes" component={Classes} />
    </Route>
  </Router>

), document.getElementById('root'));
