import React, { Component } from 'react';

import Testimonials from 'views/Testimonials';
import PartnersPanel from 'views/PartnersPanel';
import SchoolsPanel from 'views/SchoolsPanel';
import HomeVideo from './HomeVideo';
import UpdatesFeed from 'views/UpdatesFeed';
import PromoVideo from 'views/PromoVideo';

import './HomePage.scss';

class HomePage extends Component {
  render() {

    return (
      <div className='home_page page'>
        <HomeVideo />
        <div className='page_contents'>

          <div className='video_and_updates'>
            <PromoVideo />
            <UpdatesFeed />
          </div>

          <Testimonials />
          <PartnersPanel />
          <SchoolsPanel />

        </div>
      </div>
    );
  }
}



export default HomePage;
