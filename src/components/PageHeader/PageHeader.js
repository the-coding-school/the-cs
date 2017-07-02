import React from 'react';

import './PageHeader.scss';

export default class PageHeader extends React.Component {
  render() {
    const p = this.props;
    return (
      <div className='page_header'>
        <div className='header_background'>
          <img src={p.image} alt='header'/>
          <div className='shadow'></div>
        </div>
        <div className='header_contents'>
          <div className='header_text'>
            <div className='container'>
              <h1>{p.title}</h1>
              <p>{p.description}</p>
            </div>
          </div>
          {(p.appendDOM)}
        </div>
      </div>
    );
  }
}
