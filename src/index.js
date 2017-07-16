import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Skeleton from './views/Skeleton';
import routes from './routes';

ReactDOM.render((
  // TODO: Set up server to allow for back/refresh using browserHistory
  // hashHistory inserts an ugly '#' after 'the-cs.org/'

  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route component={Skeleton}>
      {routes}
    </Route>
  </Router>

), document.getElementById('root'));
