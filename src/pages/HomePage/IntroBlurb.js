// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import introBlurbImage from './introblurb.png';
import './IntroBlurb.scss';

export default function() {

  const homeIntroBlurb = {
    primary: "Empowering the next generation of leaders and problem solvers through code",
    secondary: 'We believe coding is the key to social mobility, and that’s why we are pushing the boundaries of traditional coding education by developing a diverse set of approaches and programs to ensure all students develop the skills necessary to thrive and tackle the most pressing issues facing our world.'
  }

  return (
    <div className='intro_blurb'>
      <div className='intro_blurb_image'>
        <img src={introBlurbImage} alt='girl using iPad'/>
      </div>
      <div className='intro_blurb_text'>
        <div className='primary'>{homeIntroBlurb.primary}</div>
        <div className='calls_to_action'>
          <div className='button yellow'>
            <Link to='/about'>Learn More</Link>
          </div>
          <div className='button blue'>
            <Link to='/get-involved'>Get Involved</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
