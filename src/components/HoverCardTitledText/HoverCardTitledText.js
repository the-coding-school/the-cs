import React from 'react';
import HoverCard from '../HoverCard';

import './HoverCardTitledText.scss'

export default class HoverCardTitledText extends React.Component {
  render() {
    const p = this.props;
    return (
      <HoverCard>
        <div className='hover_card_text'>
          <div className='hover_card_title'> {p.title} </div>
          <div className='hover_card_divider' />
          <div className='hover_card_description'> {p.description} </div>
        </div>
      </HoverCard>
    );
  }
}
