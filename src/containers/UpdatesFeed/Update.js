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
      imageCaption
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
          <div className='row first'>
            <div className='title'>{title}</div>
            <div className='date'>{formattedDate}</div>
          </div>
          <div className='row second'>
            {image && (
              <div className='image_wrapper'>
                <div className='image'>
                  <a href={imageLink}>
                    <img src={image} alt='update'/>
                  </a>
                </div>
                {imageCaption && (
                  <div className='image_caption'>
                    {imageCaption}
                  </div>
                )}

              </div>
            )}
            <div
              className='body'
              dangerouslySetInnerHTML={dangerousHTML(body)}
            />
          </div>
        </div>
      </div>
    );
  }
}
