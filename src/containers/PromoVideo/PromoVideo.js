import React from 'react';

import SectionHeader from '../../components/SectionHeader';

import promoVideo from './promo_video.mp4';

import './PromoVideo.scss';

export default function PromoVideo() {
  return (
    <div className='promo_video_wrapper'>
      <div className='promo_video'>
        <SectionHeader title='Video' />
        <div className='video_wrapper'>
          <video controls>
            <source src={promoVideo} type='video/mp4'/>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
