import React, { Component } from 'react';

import SectionHeader from 'components/SectionHeader';
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

          <div className='home_page_promo_video'>
            <PromoVideo />
          </div>

          <div className='home_page_updates_feed'>
            <SectionHeader title='Updates' />
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
