import React from 'react';
import IntroBlurb from '../IntroBlurb';

import './HomeVideo.scss';
import video from './homepage_video.mp4';
import poster from './homepage_video_poster.jpg';

export default class HomeVideo extends React.Component {
  render() {

    return (
      <div className='home_video'>
        <div className='video_wrapper'>
          <video autoPlay muted loop playsInline poster={poster}>
            <source src={video} type='video/mp4'/>
            Your browser does not support the video tag.
          </video>
          <div className='video_overlay_text'>
            <IntroBlurb />
          </div>
        </div>
      </div>
    );
  }
}

/* OLD video_overlay_text
<div className='text_boxes wow fadeInDown'>
  <span className='typedjs_title title'>{header.title}</span>
  <span className='typedjs_subtitle subtitle'>{header.description}</span>
</div>
*/
