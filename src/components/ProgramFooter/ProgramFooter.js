// @flow

import * as React from 'react';
import './ProgramFooter.scss';

type PropsType = {
  image: string,
  title: string,
  description?: string
}

export default function ProgramFooter(props: PropsType): React.Element<*> {
  const {
    image,
    title,
    description
  } = props;
  return (
    <div className='program_footer'>
      <div className='footer_background'>
        <img src={image} alt='footer'/>
        <div className='shadow'></div>
      </div>
      <div className='footer_contents'>
        <div className='footer_text'>
          { title && <div className='title'>{title}</div> }
          { description && <div className='description'>{description}</div> }
        </div>
      </div>
    </div>
  );
}
