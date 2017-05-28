import React from 'react';
import ReactDOM from 'react-dom';
import { Skeleton } from "./modules/Skeleton";
import Home from './modules/Home';
import About from './modules/About';
import Team from './modules/Team';
import OurPrograms from "./modules/OurPrograms"
import GetInvolved from "./modules/GetInvolved";
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route component={Skeleton}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/our-programs" component={OurPrograms} />
      <Route path="/get-involved" component={GetInvolved} />
    </Route>
  </Router>

), document.getElementById('root'));
