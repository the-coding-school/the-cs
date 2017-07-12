import React from 'react';

import promoVideo from './promo_video.mp4';

export default function PromoVideo() {
  return (
    <div className='promo_video'>
      <div className='video_wrapper'>
        <video controls>
          <source src={promoVideo} type='video/mp4'/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
