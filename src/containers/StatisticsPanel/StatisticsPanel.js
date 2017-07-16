import React from 'react';
import Statistic from '../Statistic';

import './StatisticsPanel.scss';

import statistics from './statistics.json';

export default class StatisticsPanel extends React.Component {
  render() {
    const statsIconRoot = process.env.PUBLIC_URL + '/images/statistics/';
    return (
      <div className='statistics_panel'>
        {
          statistics.map(function(s) {
            return <Statistic key={s.description} imageSrc={statsIconRoot + s.imageName} number={s.number} description={s.description} />
          })
        }
      </div>
    )
  }
}
