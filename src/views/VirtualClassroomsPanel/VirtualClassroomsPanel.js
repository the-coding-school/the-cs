import React from 'react';
import VirtualClassroom from '../VirtualClassroom';

import './VirtualClassroomsPanel.scss';

import virtualClassrooms from './virtualClassrooms.json';

export default class VirtualClassroomsPanel extends React.Component {
  render() {
    const statsIconRoot = process.env.PUBLIC_URL + '/images/statistics/';
    return (
      <div className='virtual_classrooms_panel'>
        {
          virtualClassrooms.map(function(s) {
            return <VirtualClassroom key={s.description} imageSrc={statsIconRoot + s.imageName} number={s.number} description={s.description} />
          })
        }
      </div>
    )
  }
}
