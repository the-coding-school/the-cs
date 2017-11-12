import React from 'react';

import './LearningDisabilities.scss';

export default class LearningDisabilities extends React.Component {
  render() {
    const {
      imageSrc,
      description
    } = this.props;

    return (
      <div className='learningDisabilities'>
        <img alt='learningDisabilities' src={imageSrc} width='100' height='100' />
        <p>{description}</p>
      </div>
    );
  }
}
