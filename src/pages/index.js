// @flow

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import OurImpactPage from './OurImpactPage';
import OurProgramsPage from './OurProgramsPage';
import TeamPage from './TeamPage';
import GetInvolvedPage from './GetInvolvedPage';
import DonatePage from './DonatePage';

const pages = [
  {
    path: '/',
    name: 'Home',
    exactPath: true,
    component: HomePage
  },
  {
    path: '/about',
    name: 'About Us',
    component: AboutPage.component,
    sections: AboutPage.sections
  },
  {
    path: '/impact',
    name: 'Our Impact',
    component: OurImpactPage.component,
    sections: OurImpactPage.sections
  },
  {
    path: '/programs',
    name: 'Our Programs',
    component: OurProgramsPage.component,
    sections: OurProgramsPage.sections
  },
  {
    path: '/team',
    name: 'Our Team',
    component: TeamPage.component,
    sections: TeamPage.sections
  },
  {
    path: '/get-involved',
    name: 'Get Involved',
    component: GetInvolvedPage.component,
    sections: GetInvolvedPage.sections
  },
  {
    path: '/donate',
    name: 'Donate',
    component: DonatePage
  }
];

export default pages;
