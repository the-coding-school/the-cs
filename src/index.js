import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Skeleton from './containers/Skeleton';
import {
  HomePage,
  AboutPage,
  OurFootprintPage,
  OurProgramsPage,
  TeamPage,
  GetInvolvedPage
} from './pages';

ReactDOM.render((
  // TODO: Set up server to allow for back/refresh using browserHistory
  // hashHistory inserts an ugly '#' after 'the-cs.org/'
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route component={Skeleton}>
      <Route path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/team' component={TeamPage} />
      <Route path='/programs' component={OurProgramsPage} />
      <Route path='/footprint' component={OurFootprintPage} />
      <Route path='/get-involved' component={GetInvolvedPage} />
    </Route>
  </Router>

), document.getElementById('root'));
