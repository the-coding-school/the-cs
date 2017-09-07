// @flow

import * as React from 'react';
import './TitledContent.scss';

type PropsType = {
  title: string,
  subtitle?: string,
  children: React.Element<*>
};

export default (props: PropsType) => (
  <div className='titled_content_wrapper'>
    <div className='titled_content' key={props.title}>
      <div className='title_side'>
        <h1 className='title'>{props.title}</h1>
        {
          props.hasOwnProperty('subtitle') &&
            <h2 className='subtitle'>{props.subtitle}</h2>
        }
      </div>
      <div className='content_side'>
        {props.children}
      </div>
    </div>
  </div>
);
