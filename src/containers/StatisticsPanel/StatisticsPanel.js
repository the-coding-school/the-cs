import React from 'react';
import Statistic from './Statistic';

import './StatisticsPanel.scss';

import statisticsData from './statisticsData';

export default class StatisticsPanel extends React.Component {
  render() {

    return (
      <div className='statistics_panel'>
        {
          statisticsData.map(function(s) {
            return (
              <Statistic
                key={s.description}
                imageSrc={s.image}
                number={s.number}
                description={s.description}
              />
            );
          })
        }
      </div>
    )

  }
}
