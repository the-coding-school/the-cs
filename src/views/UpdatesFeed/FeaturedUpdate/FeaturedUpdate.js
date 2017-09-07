import React from 'react';
import moment from 'moment';

import './FeaturedUpdate.scss';
import CONSTANTS from '../constants';

export default class FeaturedUpdate extends React.Component {
  render() {

    const {
      title,
      date,
      link,
      image
    } = this.props.update;

    const bgStyles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    return (
      <div className='featured_update'>
        <div className='background'>
          <div className='background_image' style={bgStyles} />
          <div className='background_image_mask' />
        </div>

        <div className='update_text'>
          <div className='date'>
            {moment(date).format(CONSTANTS.DATE_FORMAT)}
          </div>
          <div className='title'>
            {title}
          </div>
          <div className='button'>
            <a href={link.url}>
              {link.text}
            </a>
          </div>

        </div>
      </div>
    );
  }
}
