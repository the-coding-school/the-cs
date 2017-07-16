import React, { Component } from 'react';

import Testimonials from 'containers/Testimonials';
import PartnersPanel from 'containers/PartnersPanel';
import SchoolsPanel from 'containers/SchoolsPanel';
import HomeVideo from './HomeVideo';
import UpdatesFeed from 'containers/UpdatesFeed';
import PromoVideo from 'containers/PromoVideo';

import pageData from './HomePage.json';

import './HomePage.scss';

class HomePage extends Component {
  render() {

    return (
      <div className='home_page page'>
        <HomeVideo header={pageData.header} />
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
