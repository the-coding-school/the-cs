import React from 'react';
import ReactDOM from 'react-dom';
import { Skeleton } from "./modules/Skeleton";
import HomePage from './modules/HomePage';
import AboutPage from './modules/AboutPage';
import TeamPage from './modules/TeamPage';
import OurProgramsPage from "./modules/OurProgramsPage";
import OurImpactPage from "./modules/OurImpactPage";
import GetInvolvedPage from "./modules/GetInvolvedPage";
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route component={Skeleton}>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/programs" component={OurProgramsPage} />
      <Route path="/impact" component={OurImpactPage} />
      <Route path="/get-involved" component={GetInvolvedPage} />
    </Route>
  </Router>

), document.getElementById('root'));
