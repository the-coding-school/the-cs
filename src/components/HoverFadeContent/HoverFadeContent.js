import React from 'react';

import './HoverFadeContent.scss';

export default class HoverFadeContent extends React.Component {
  render() {

    const {
      regular,
      hover
    } = this.props;

    return (
      <div className='hover_fade_content'>
        <div className='hover'> {hover} </div>
        <div className='regular'> {regular} </div>
      </div>
    );
  }
}
