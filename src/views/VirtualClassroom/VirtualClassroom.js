import React from 'react';

import './VirtualClassroom.scss';

export default class VirtualClassroom extends React.Component {
  render() {
    const {
      imageSrc,
      number,
      description
    } = this.props;

    return (
      <div className='virtualClassroom'>
        <img alt='virtualClassroom' src={imageSrc} width='80' height='80' />
        <h2>{number}</h2>
        <p>{description}</p>
      </div>
    );
  }
}
