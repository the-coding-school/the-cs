import React from 'react';

import HoverCardTitledText from '../../components/HoverCardTitledText';

import philosophies from './philosophies.json';

import './Philosophies.scss';

export default class Philosophies extends React.Component {
  render() {
    const philosophiesDOM = philosophies.map((p) =>  {
      return (
        <HoverCardTitledText key={p.philosophy} title={p.philosophy} description={p.description} />
      );
    })

    return (
      <div className='philosophies_wrapper'>
        <div className='philosophies'>
          {philosophiesDOM}
        </div>
      </div>
    );
  }
}
