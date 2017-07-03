import React, { Component } from 'react';

import Testimonials from '../../containers/Testimonials';
import PartnersPanel from '../../containers/PartnersPanel';
import SchoolsPanel from '../../containers/SchoolsPanel';
import HomeVideo from './HomeVideo';
import SectionHeader from '../../components/SectionHeader';

import pageData from './HomePage.json';

import './HomePage.scss';

class HomePage extends Component {
  render() {

    const homeIntroBlurb = 'The Coding School (TCS) is a 501c3 organization that aims to empower the next generation through computer science education. We believe coding is the key to social mobility, and that’s why we are pushing the boundaries of traditional coding education by developing a diverse set of approaches and programs to ensure all students, regardless of socioeconomic background, geographic location, or learning differences, develop the skills necessary to thrive and tackle the most pressing issues facing our world.';

    return (
      <div className='App'>
        <HomeVideo header={pageData.header} />
        <div className='homepage page'>

          <div className='intro_blurb'>
            {homeIntroBlurb}
          </div>

          <Testimonials />

          <SectionHeader title='Our Partners' />
          <div className='homepage_panel container'>
            <PartnersPanel />
          </div>

          <SectionHeader
            title='School Districts We Have Coding Programs In'
          />
          <div className='homepage_panel container'>


            <SchoolsPanel />
          </div>

        </div>
      </div>
    );
  }
}



export default HomePage;
