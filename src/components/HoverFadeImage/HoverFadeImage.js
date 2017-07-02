import React from 'react';

import HoverFadeContent from '../HoverFadeContent';

import './HoverFadeImage.scss';

export default class HoverFadeImage extends React.Component {
  render() {
    const {
      regular,
      hover
    } = this.props;

    const regularDOM = <img className='regular_img' src={regular} alt='regular' />
    const hoverDOM = <img className='hover_img' src={hover} alt='hover' />

    return (
      <div className='hover_fade_image'>
        <HoverFadeContent regular={regularDOM} hover={hoverDOM} />
      </div>
    );
  }
}
