import React from 'react';
import moment from 'moment';

import './Update.scss';
import CONSTANTS from '../constants';

export default class Update extends React.Component {
  render() {

    const {
      title,
      date,
      link,
      image
    } = this.props.update;

    const imageStyle = {
      backgroundImage: `url(${image})`,
    };

    return (
      <div className='update'>

        <div className='update_image' style={imageStyle} />

        <div className='update_text'>
          <div className='date'>
            {moment(date).format(CONSTANTS.DATE_FORMAT)}
          </div>
          <div className='title'>
            {title}
          </div>
          <a className='link_button' href={link.url}>
            {link.text}
          </a>
        </div>

      </div>
    );
  }
}
