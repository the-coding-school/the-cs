import React from 'react';

import './Update.scss';

export default class Update extends React.Component {
  render() {

    const {
      title,
      date,
      body,
      image,
      imageLink,
      imageCaption,
      updateLink
    } = this.props.update;

    const dangerousHTML = (text) => { return {__html: text}; };

    const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const dateObj = new Date(date)
    const formattedDate = (`
      ${months[dateObj.getMonth()]}
      ${dateObj.getDate()}`
    ).toUpperCase();

    return (

      <div className='update_wrapper'>
        <div className='update'>
          <div className='date'>{formattedDate}</div>
          <div className='title'>
            <a href={title.link}>
              {title.text}
            </a>
          </div>

          <div
            className='body'
            dangerouslySetInnerHTML={dangerousHTML(body)}
          />

          {image && (<div className='image_wrapper'>

            <div className='image'>
              <a href={image.link}>
                <img src={image.source} alt='update'/>
              </a>
            </div>

            {imageCaption && (
              <div className='image_caption'>
                {imageCaption}
              </div>
            )}

          </div>)}

        </div>
      </div>
    );
  }
}
