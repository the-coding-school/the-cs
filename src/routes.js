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

/*
* The way the navbar dropdown links are set up is quite finnicky. The 'sections'
* value of each page object has a link that represents the DOM id attribute of
* the element to which clicking on said dropdown links scrolls to.
* Other pieces that make this work together include:
*   - /src/index.js:hashLinkScroll
*   - /src/views/Navbar/NavbarDropdown
*   - the DOM id's that need to be set explicitly for elements we specify in the
*     nav dropdown
*/

const pages = [
  {
    path: '/',
    name: 'Home',
    sections: [],
    component: HomePage
  },
  {
    path: '/about',
    name: 'About Us',
    sections: [
      {
        name: 'Our Mission',
        link: '#ourmission'
      },
      {
        name: 'Who We Are',
        link: '#whoweare'
      },
      {
        name: 'Our Philosophy',
        link: '#ourphilosophy'
      }
    ],
    component: AboutPage
  },
  {
    path: '/footprint',
    name: 'Our Footprint',
    sections: [
      {
        name: 'Our Footprint',
        link: '#ourfootprint'
      },
      {
        name: 'Our Unique Approach',
        link: '#ouruniqueapproach'
      }
    ],
    component: OurFootprintPage
  },
  {
    path: '/programs',
    name: 'Our Programs',
    sections: [
      {
        name: 'Classroom Programs',
        link: '#classroomprograms'
      },
      {
        name: 'codeConnects',
        link: '#codeconnects'
      },
      {
        name: 'Learning Disabilities and Coding',
        link: '#learningdisabilitiesandcoding'
      }
    ],
    component: OurProgramsPage
  },
  {
    path: '/team',
    name: 'Our Team',
    sections: [
      {
        name: 'Founder',
        link: '#founder'
      },
      {
        name: 'Advisors',
        link: '#advisors'
      },
      {
        name: 'Team Heads',
        link: '#teamheads'
      },
      {
        name: 'Teachers',
        link: '#teachers'
      }
    ],
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
