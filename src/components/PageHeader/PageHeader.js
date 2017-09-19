// @flow

import * as React from 'react';
import './PageHeader.scss';

type PropsType = {
  image: string,
  title: string,
  description?: string,
  callToAction?: string,
}

export default function PageHeader(props: PropsType): React.Element<*> {
  const {
    image,
    title,
    description,
    callToAction
  } = props;
  return (
    <div className='page_header'>
      <div className='header_background'>
        <img src={image} alt='header'/>
        <div className='shadow'></div>
      </div>
      <div className='header_contents'>
        <div className='header_text'>
          { title && <div className='title'>{title}</div> }
          { callToAction && <div className='call_to_action'>{callToAction}</div>}
          { description && <div className='description'>{description}</div> }
        </div>
      </div>
    </div>
  );
}
