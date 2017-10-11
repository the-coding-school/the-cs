import React from 'react';

import './VirtualClassroom.scss';

export default class VirtualClassroom extends React.Component {
  render() {
    const {
      imageSrc,
      description
    } = this.props;

    return (
      <div className='virtualClassroom'>
        <img alt='virtualClassroom' src={imageSrc} width='100' height='100' />
        <p>{description}</p>
      </div>
    );
  }
}
