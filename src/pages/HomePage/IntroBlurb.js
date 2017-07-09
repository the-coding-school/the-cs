import React from 'react';
import { Link } from 'react-router';

import introBlurbImage from './introblurb.png';
import './IntroBlurb.scss';
export default function() {

  const homeIntroBlurb = {
    primary: 'The Coding School (TCS) is a 501c3 organization that aims to empower the next generation through computer science education.',
    secondary: 'We believe coding is the key to social mobility, and that’s why we are pushing the boundaries of traditional coding education by developing a diverse set of approaches and programs to ensure all students, regardless of socioeconomic background, geographic location, or learning differences, develop the skills necessary to thrive and tackle the most pressing issues facing our world.'
  }

  return (
    <div className='intro_blurb'>
      <div className='intro_blurb_image wow fadeInLeft'>
        <img src={introBlurbImage} alt='girl using iPad'/>
      </div>
      <div className='intro_blurb_text wow fadeInRight'>
        <div className='primary'>{homeIntroBlurb.primary}</div>
        <div className='secondary'>{homeIntroBlurb.secondary}</div>
        <div className='calls_to_action'>
          <div className='button yellow'>
            <Link to='/donate'>
                Donate
            </Link>
          </div>
          <div className='button blue'>
            <Link to='/get-involved'>
                Get Involved
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
