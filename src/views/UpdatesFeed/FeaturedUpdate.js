import React from 'react';

import './FeaturedUpdate.scss';

export default class FeaturedUpdate extends React.Component {
  render() {

    const {
      title,
      date,
      link,
      image
    } = this.props.update;

    // TODO: Replace this code with momentjs
    const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const dateObj = new Date(date)
    const formattedDate = (`
      ${months[dateObj.getMonth()]}
      ${dateObj.getDate()}`
    ).toUpperCase();

    const updateStyles = {
      backgroundImage: `url(${image})`,

    };

    return (
      <div className='featured_update' style={updateStyles}>
        <div className='date'>{formattedDate}</div>
        <div className='title'>
          {title}
        </div>
        <a className='link_button' href={link.url}>
          {link.text}
        </a>
      </div>
    );
  }
}
