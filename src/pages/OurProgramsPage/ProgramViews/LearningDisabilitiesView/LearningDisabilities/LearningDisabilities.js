import React from 'react';

import './LearningDisabilities.scss';

export default class LearningDisabilities extends React.Component {
  render() {
    const {
      imageSrc,
      description,
      display
    } = this.props;

    if(display === "image on top") {
      return (
      <div className='learningDisabilities'>
        <img alt='learningDisabilities' src={imageSrc} height='250' />
        <p>{description}</p>
      </div>
      );
    }
    else if(display === "text on top") {
      return (
        <div className='learningDisabilities'>
          <p>{description}</p>
          <img alt='learningDisabilities' src={imageSrc} height='250' />
        </div>
      );
    }
    else if(display === "image only") {
      return (
        <div className='learningDisabilities'>
          <img alt='learningDisabilities' src={imageSrc} height='350' />
        </div>
      ); 
    }
    else if(display === "divider") {
      return (
        <div className='divider'>
          <img alt='learningDisabilities' src={imageSrc} height='500' />
        </div>
      ); 
    }
    else {
      return (
        <div className='learningDisabilities'>
          <p>{description}</p>
        </div>
      ); 
    }
  }
}
