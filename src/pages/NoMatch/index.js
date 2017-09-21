// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from 'images/nomatch.jpg';
import './NoMatch.scss';

export default function NoMatch() {
  return (
    <div
      className='no_match'
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div className='no_match_overlay'/>
      <div className='no_match_contents'>
        <h1>Uh oh! We can't find what you're looking for!</h1>
        <Link to='/'>Take me home.</Link>
      </div>
    </div>
  );
}
