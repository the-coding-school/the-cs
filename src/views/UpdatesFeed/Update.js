import React from 'react';

import './Update.scss';

export default class Update extends React.Component {
  render() {

    const {
      title,
      date,
      link,
      image
    } = this.props.update;

    const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const dateObj = new Date(date)
    const formattedDate = (`
      ${months[dateObj.getMonth()]}
      ${dateObj.getDate()}`
    ).toUpperCase();

    return (
      <div className='update'>
        <div className='update_image'>
          <img src={image} alt='update' />
        </div>

        <div className='update_text_wrapper'>
          <div className='update_text'>
            <div className='date'>{formattedDate}</div>
            <div className='title'>
              {title}
            </div>
            <a className='link_button' href={link.url}>
              {link.text}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
