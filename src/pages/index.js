import HomePage from './HomePage';
import AboutPage from './AboutPage';
import OurImpactPage from './OurImpactPage';
import OurProgramsPage from './OurProgramsPage';
import TeamPage from './TeamPage';
import GetInvolvedPage from './GetInvolvedPage';
import DonatePage from './DonatePage';

/*
* The way the navbar dropdown links are set up is quite finnicky. The 'sections'
* value of each page object has a link that represents the DOM id attribute of
* the element to which clicking on said dropdown links scrolls to.
* Other pieces that make this work together include:
*   - /src/index.js:hashLinkScroll
*   - /src/views/Navbar/NavbarDropdown
*   - the DOM id's that need to be set explicitly for elements we specify in the
*     nav dropdown
*
* IMPORTANT NOTE ABOUT WHERE SOME OF THE ANCHOR TAGS COME FROM:
*   - Both the SectionHeader and TitledContent components give their main
*     rendered element anchor tags with a naming convention of
*     title.split(' ').join('').toLowerCase()
*     e.g. 'Our Mission' ==> 'ourmission'
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
    path: '/impact',
    name: 'Our Impact',
    sections: [
      {
        name: 'Our Impact',
        link: '#ourimpact'
      },
      {
        name: 'Our Unique Approach',
        link: '#ouruniqueapproach'
      },
      {
        name: 'Testimonials',
        link: '#testimonials'
      }
    ],
    component: OurImpactPage
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
      },
      {
        name: 'Virtual Classroom Instruction',
        link: '#virtualclassroominstruction'
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
        name: 'Board Members',
        link: '#boardmembers'
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

export default pages;
