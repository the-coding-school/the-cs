// @flow

import React from 'react';
import LearningDisabilitiesPanel from './LearningDisabilitiesPanel';
import ProgramFooter from '../ProgramFooter';
import viewData from './LearningDisabilitiesViewData';
import './LearningDisabilitiesView.scss';

export default function cView() {
  const { footer } = viewData;

  return (
    <div className='learning_disabilities_view'>
      <LearningDisabilitiesPanel />
      <ProgramFooter image={footer.image} title={footer.title}/>
    </div>
  );
}
