// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from 'views/Navbar';
import Footer from 'views/Footer';
import NoMatch from 'pages/NoMatch';
import pages from 'pages';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        {
          pages.map(p => {
            const routeProps = {
              key: p.path,
              path: p.path,
              component: p.component,
              exact: Boolean(p.exactPath)
            };

            return <Route {...routeProps} />
          })
        }
        <Route component={NoMatch} status={400} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
