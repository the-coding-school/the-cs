import React from 'react';
import FeaturedUpdate from './FeaturedUpdate';
import Update from './Update';
import SectionHeader from 'components/SectionHeader';

import updates from './UpdatesFeedData';
import './UpdatesFeed.scss';

export default class UpdatesFeed extends React.Component {

  handleScrollButtonClick() {
    if (this.updatesFeedDiv) {
      this.updatesFeedDiv.scrollLeft = this.updatesFeedDiv.scrollLeft + 200;
    }
  }

  render() {

    // Slicing updates array to only show most recent updates
    const NUM_UPDATES_SHOWN = 20;

    const recencySort = (a, b) => {
      if (new Date(a.date) > new Date(b.date)) return -1;
      if (new Date(a.date) < new Date(b.date)) return 1;
      return 0;
    }

    return (
      <div className='updates_feed_wrapper'>
        <div
          className='updates_feed'
          ref={div => this.updatesFeedDiv = div}
        >
          <div className='first_update'>
            <FeaturedUpdate
              key={updates[0].title}
              update={updates[0]}
            />
          </div>

          <div className='remaining_updates'>
            { updates.slice(1, NUM_UPDATES_SHOWN).sort(recencySort).map(u => (
              <div className='update_grid_cell'>
                <Update key={u.title} update={u} />
              </div>
            )) }
          </div>
        </div>
        <div
          className='scroll_button'
          onClick={this.handleScrollButtonClick.bind(this)}
        >
          {'>'}
        </div>
      </div>
    );
  }
}
