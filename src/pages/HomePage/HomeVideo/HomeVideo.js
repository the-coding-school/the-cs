import React from 'react';
import IntroBlurb from '../IntroBlurb';

import './HomeVideo.scss';
import video from './homepage_video.mp4';
import poster from './homepage_video_poster.jpg';

export default class HomeVideo extends React.Component {
  render() {
    // const {
    //   header
    // } = this.props;

    const homeIntroBlurb = {
      primary: 'The Coding School (TCS) is a 501c3 organization that aims to empower the next generation through computer science education.',
      secondary: 'We believe coding is the key to social mobility, and that’s why we are pushing the boundaries of traditional coding education by developing a diverse set of approaches and programs to ensure all students, regardless of socioeconomic background, geographic location, or learning differences, develop the skills necessary to thrive and tackle the most pressing issues facing our world.'
    }

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

/*
<div className='text_boxes wow fadeInDown'>
  <span className='typedjs_title title'>{header.title}</span>
  <span className='typedjs_subtitle subtitle'>{header.description}</span>
</div>
*/