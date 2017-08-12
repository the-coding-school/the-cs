import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Skeleton from './views/Skeleton';
import routes from './routes';
import {
  smoothlyScrollToElement,
  smoothlyScrollToPageOffset
} from 'utilities/dom';

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {

      // This part is VERY hacky/finnicky, so it could break quite easily
      // !! BEWARE !!
      const keys = hash.split('#');
      const id = `${keys[keys.length - 1]}`;
      const element = document.getElementById(id);
      debugger
      if (element) {
        smoothlyScrollToElement(element, 300);
      } else {
        smoothlyScrollToPageOffset(0);
      }
    }, 0);
  }
}

ReactDOM.render((
  <Router onUpdate={hashLinkScroll} history={hashHistory}>
    <Route component={Skeleton}>
      {routes}
    </Route>
  </Router>

), document.getElementById('root'));
