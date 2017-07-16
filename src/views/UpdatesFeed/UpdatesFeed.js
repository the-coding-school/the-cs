import React from 'react';
import Update from './Update';
import SectionHeader from 'components/SectionHeader';

import updates from './UpdatesFeedData';
import './UpdatesFeed.scss';

export default class UpdatesFeed extends React.Component {
  render() {

    // Slicing updates array to only show recent updates
    const NUM_UPDATES_SHOWN = 5;

    const recencySort = (a, b) => {
      if (new Date(a.date) > new Date(b.date)) return -1;
      if (new Date(a.date) < new Date(b.date)) return 1;
      return 0;
    }

    return (
      <div className='updates_feed_wrapper'>
        <SectionHeader title='Updates'/>
        <div className='updates_feed'>
          { updates.sort(recencySort).map(u => (
              <Update key={u.title.text} update={u} />
          )).slice(0,NUM_UPDATES_SHOWN)}
        </div>
      </div>
    );
  }
}
