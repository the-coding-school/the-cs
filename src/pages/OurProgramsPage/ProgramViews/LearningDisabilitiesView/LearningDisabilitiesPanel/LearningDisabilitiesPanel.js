import React from 'react';
import LearningDisabilities from '../LearningDisabilities';

import './LearningDisabilitiesPanel.scss';

import learningDisabilities from './learningDisabilities.json';

export default class LearningDisabilitiesPanel extends React.Component {
  render() {
    const statsIconRoot = process.env.PUBLIC_URL + '/images/learningDisabilities/';
    return (
      <div className='learning_disabilities_panel'>
        {
          learningDisabilities.map(function(s) {
            return <LearningDisabilities key={s.description} imageSrc={statsIconRoot + s.imageName} description={s.description} />
          })
        }
      </div>
    )
  }
}
