import React from 'react';
import LearningDisabilities from '../LearningDisabilities';

import './LearningDisabilitiesPanel.scss';

import learningDisabilities from './learningDisabilities.json';

export default class LearningDisabilitiesPanel extends React.Component {
  render() {
    const statsIconRoot = process.env.PUBLIC_URL + '/images/learningDisabilities/';
    return (
      <div className='learning_disabilities_panel'>
        <div className='row_1'>
          {
            learningDisabilities.row1.map(function(s) {
              return <LearningDisabilities key={s.description} imageSrc={statsIconRoot + s.imageName} description={s.description} display={s.display} />
            })
          }
        </div>
        <div className='row_2'>
          {
            learningDisabilities.row2.map(function(s) {
              return <LearningDisabilities key={s.description} imageSrc={statsIconRoot + s.imageName} description={s.description} display={s.display} />
            })
          }
        </div>
        <div className='row_3'>
          {
            learningDisabilities.row3.map(function(s) {
              return <LearningDisabilities key={s.description} imageSrc={statsIconRoot + s.imageName} description={s.description} display={s.display} />
            })
          }
        </div>
      </div>
    )
  }
}
