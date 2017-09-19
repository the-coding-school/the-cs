// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import './ProgramOption.scss';

type PropsType = {
  icon: React.Element<*>,
  image: string,
  title: string,
  caption: string,
  link: string,
};

export default function ProgramOption(props: PropsType) {
  const { icon, image, title, caption, link } = props;
  return (
    <div className='program_option'>
      <div className='text_container'>
        <div
          className='title_container'
          style={ {backgroundImage: `url(${image})`}}
        >
          <div className='title_overlay' />
          <div className='title'>{ title }</div>
        </div>
        <div className='caption'>
          {caption}
        </div>
        <Link className='link' to={link}>Learn More</Link>
      </div>

      <div className='icon'>
        { icon }
      </div>
    </div>
  );
}
