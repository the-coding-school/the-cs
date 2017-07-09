import React from 'react';
import { Route } from 'react-router';

import Skeleton from './containers/Skeleton'
import Pages, {
  HomePage,
  AboutPage,
  OurFootprintPage,
  OurProgramsPage,
  TeamPage,
  GetInvolvedPage
} from './pages';

export default (
  <Route component={Skeleton}>
    <Route path='/' component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/team' component={TeamPage} />
    <Route path='/programs' component={OurProgramsPage} />
    <Route path='/footprint' component={OurFootprintPage} />
    <Route path='/get-involved' component={GetInvolvedPage} />
  </Route>
);
