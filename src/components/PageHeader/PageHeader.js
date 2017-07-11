import React from 'react';

import './PageHeader.scss';

export default class PageHeader extends React.Component {
  render() {

    const {
      image,
      title,
      description,
      appendDOM
    } = this.props;

    return (
      <div className='page_header'>
        <div className='header_background'>
          <img src={image} alt='header'/>
          <div className='shadow'></div>
        </div>
        <div className='header_contents'>
          <div className='header_text'>
            <div className='container'>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          {(appendDOM)}
        </div>
      </div>
    );
  }
}
