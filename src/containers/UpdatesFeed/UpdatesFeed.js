import React from 'react';
import Update from './Update';
import SectionHeader from '../../components/SectionHeader';

import updates from './updatesData';
import './UpdatesFeed.scss';

export default class UpdatesFeed extends React.Component {
  render() {
    
    // Slicing updates array to only show recent updates
    const NUM_UPDATES_SHOWN = 3;

    const recencySort = (a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    }

    return (
      <div className='updates_feed_wrapper'>
        <div className='updates_feed'>
        <SectionHeader
          title='Updates'
        />
          { updates.sort(recencySort).map(u => (
              <Update key={u.title} update={u} />
          )).slice(0,NUM_UPDATES_SHOWN)}
        </div>
      </div>
    );
  }
}
