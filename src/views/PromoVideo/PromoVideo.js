import React from 'react';

import promoVideo from './promo_video.mp4';
import posterFrame from './poster_frame.png';

import './PromoVideo.scss';

export default function PromoVideo() {
  return (
    <div className='promo_video_wrapper'>
      <div className='promo_video'>
        <video controls poster={posterFrame}>
          <source src={promoVideo} type='video/mp4'/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
