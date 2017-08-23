import React from 'react';
import { TweenMax } from 'gsap';

import ColumnWrapGrid from 'components/ColumnWrapGrid';
import RightArrowIcon from 'components/icons/RightArrowIcon';

import FeaturedUpdate from './FeaturedUpdate';
import Update from './Update';
import updates from './UpdatesFeedData';
import './UpdatesFeed.scss';
import CONSTANTS from './constants';
import { recencySort } from 'utilities/sort';

export default class UpdatesFeed extends React.Component {

  constructor(props) {
    super(props);
    updates.sort(recencySort);

    this.rerender = this.rerender.bind(this);
  }

  componentDidMount() {
    // Now that we have the updatesFeedDiv ref available, re-determine
    // whether to show the scroll arrows
    this.rerender();

    window.addEventListener('resize', this.rerender);
  }

  componentWillUnMount() {
    window.removeEventListener('resize', this.rerender);
  }

  showScrollLeft() {
    if (!this.updatesFeedDiv) return false;
    const currentScroll = this.updatesFeedDiv.scrollLeft;
    return (currentScroll > CONSTANTS.SCROLL_BUTTON_BUFFER);
  }

  showScrollRight() {
    if (!this.updatesFeedDiv) return false;
    const hiddenScrollWidth =
      this.updatesFeedDiv.scrollWidth - this.updatesFeedDiv.offsetWidth;
    const currentScroll = this.updatesFeedDiv.scrollLeft;
    return (
      hiddenScrollWidth > currentScroll + CONSTANTS.SCROLL_BUTTON_BUFFER
      && this.updatesFeedDiv.scrollWidth > window.innerWidth
    );
  }

  rerender() {
    this.forceUpdate();
  }

  handleScrollButtonClick(direction) {
    if (this.updatesFeedDiv) {

      const scrollAmount = (direction === 'right') ?
        (window.innerWidth * 0.9) :
        -(window.innerWidth * 0.9);

      TweenMax.fromTo(
        this.updatesFeedDiv,
        0.3,
        { scrollLeft: this.updatesFeedDiv.scrollLeft },
        { scrollLeft: this.updatesFeedDiv.scrollLeft + scrollAmount }
      );
    }
  }

  render() {
    return (
      <div className='updates_feed_wrapper'>
        <div
          className='updates_feed'
          ref={div => this.updatesFeedDiv = div}
          onScroll={this.rerender}
        >

          <div className='first_update'>
            <FeaturedUpdate
              key={updates[0].title}
              update={updates[0]}
            />
          </div>

          <ColumnWrapGrid
            className='remaining_updates'
            cells={
              updates
                .slice(1, CONSTANTS.NUM_UPDATES_SHOWN).map((update, i) => (
                  <Update update={update} key={i} />
                ))
            }
          />
        </div>

        { this.showScrollRight() && <div
          className='scroll_button right'
          onClick={this.handleScrollButtonClick.bind(this, 'right')}
        >
          <RightArrowIcon
            height={24}
            fill={'black'}
          />
        </div> }

        { this.showScrollLeft() && <div
          className='scroll_button left'
          onClick={this.handleScrollButtonClick.bind(this, 'left')}
        >
          <RightArrowIcon
            height={24}
            fill='black'
            transform='rotate(180,0,0)'
          />
        </div>}

      </div>
    );
  }
}
