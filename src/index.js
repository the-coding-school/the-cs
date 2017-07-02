import React from 'react';
import ReactDOM from 'react-dom';
import { Skeleton } from './components/Skeleton';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TeamPage from './pages/TeamPage';
import OurProgramsPage from './components/OurProgramsPage';
import OurImpactPage from './components/OurImpactPage';
import GetInvolvedPage from './components/GetInvolvedPage';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
  // TODO: Set up server to allow for back/refresh using browserHistory
  // hashHistory inserts an ugly '#' after 'the-cs.org/'
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route component={Skeleton}>
      <Route path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/team' component={TeamPage} />
      <Route path='/programs' component={OurProgramsPage} />
      <Route path='/footprint' component={OurImpactPage} />
      <Route path='/get-involved' component={GetInvolvedPage} />
    </Route>
  </Router>

), document.getElementById('root'));
