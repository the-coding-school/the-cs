import React from 'react';
import { Route } from 'react-router-dom';

import pages from './pages';

const innerRoutes = pages.map(p => (
  <Route
    key={p.path}
    path={p.path}
    component={p.component}
  />
));

export default innerRoutes;
