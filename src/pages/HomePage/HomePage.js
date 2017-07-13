import React, { Component } from 'react';

import Testimonials from '../../containers/Testimonials';
import PartnersPanel from '../../containers/PartnersPanel';
import SchoolsPanel from '../../containers/SchoolsPanel';
import HomeVideo from './HomeVideo';
import SectionHeader from '../../components/SectionHeader';
import UpdatesFeed from '../../containers/UpdatesFeed';
import PromoVideo from '../../containers/PromoVideo';

import pageData from './HomePage.json';

import './HomePage.scss';

class HomePage extends Component {
  render() {

    return (
      <div className='App'>
        <HomeVideo header={pageData.header} />
        <div className='homepage page'>

          <div className='video_and_updates'>
            <PromoVideo />
            <UpdatesFeed />
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
