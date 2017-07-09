import React from 'react';
import { Route } from 'react-router';

import {
  HomePage,
  AboutPage,
  OurFootprintPage,
  OurProgramsPage,
  TeamPage,
  GetInvolvedPage,
  DonatePage
} from './pages';

const pages = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About Us',
    component: AboutPage
  },
  {
    path: '/footprint',
    name: 'Our Footprint',
    component: OurFootprintPage
  },
  {
    path: '/programs',
    name: 'Our Programs',
    component: OurProgramsPage
  },
  {
    path: '/team',
    name: 'Our Team',
    component: TeamPage
  },
  {
    path: '/get-involved',
    name: 'Get Involved',
    component: GetInvolvedPage
  },
  {
    path: '/donate',
    name: 'Donate',
    component: DonatePage
  }
];

const innerRoutes = pages.map(p => (
  <Route
    key={p.path}
    path={p.path}
    component={p.component}
  />
));

export default innerRoutes;
export { pages }
