import React from 'react';

import './Statistic.scss';

export default class Statistic extends React.Component {
  render() {
    const {
      imageSrc,
      number,
      description
    } = this.props;

    return (
      <div className='statistic'>
        <img alt='statistic' src={imageSrc} width='80' height='80' />
        <h2>{number}</h2>
        <p>{description}</p>
      </div>
    );
  }
}
