// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './utilities/polyfill'
import Navbar from 'views/Navbar';
import Footer from 'views/Footer';
import pages from 'pages';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
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
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
