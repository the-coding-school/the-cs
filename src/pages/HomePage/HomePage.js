import React, { Component } from 'react';

import SectionHeader from 'components/SectionHeader';
import Testimonials from 'views/Testimonials';
import PartnersPanel from 'views/PartnersPanel';
import SchoolsPanel from 'views/SchoolsPanel';
import HomeVideo from './HomeVideo';
import UpdatesFeed from 'views/UpdatesFeed';
import PromoVideo from 'views/PromoVideo';

import './HomePage.scss';

const TitledPageRow = (props) => (
  <div className={`titled_page_row ${props.className}`}>
    <div className='title'>
      <SectionHeader title={props.title} subtitle={props.subtitle} />
    </div>
    <div className='page_row'>
      {props.children}
    </div>
  </div>
);

class HomePage extends Component {
  render() {

    return (
      <div className='home_page page'>
        <HomeVideo />
        <div className='page_contents'>

          <TitledPageRow
            title='A Look Into the Classroom'
            className='home_page_promo_video'
          >
            <PromoVideo />
            <div className='video_text'>
              We believe coding is the key to social mobility, and that’s why we are pushing the boundaries of traditional coding education by developing a diverse set of approaches and programs to ensure all students develop the skills necessary to thrive and tackle the most pressing issues facing our world.
            </div>
          </TitledPageRow>

          <div className='home_page_partners_panel'>
            <SectionHeader subtitle='Our Partners' />
            <PartnersPanel />
          </div>

          <TitledPageRow
            title='Updates'
            className='home_page_updates_feed'
          >
            <UpdatesFeed/>
          </TitledPageRow>

          <div className='home_page_partners_panel'>
            <SectionHeader
              subtitle='School Districts We Have Coding Programs In'
            />
            <SchoolsPanel />
          </div>

          <div className='home_page_testimonials'>
            <Testimonials />
          </div>

        </div>
      </div>
    );
  }
}



export default HomePage;
