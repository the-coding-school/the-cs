import React from 'react';

import './HoverCard.scss'

export default class HoverCard extends React.Component {
  render() {
    return (
      <div className='hover_card_wrapper'>
        <div className='hover_card'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
