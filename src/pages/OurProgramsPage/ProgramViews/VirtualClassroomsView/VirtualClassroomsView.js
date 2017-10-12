// @flow

import React from 'react';
import VirtualClassroomsPanel from 'views/VirtualClassroomsPanel';
import ProgramFooter from 'components/ProgramFooter';
import viewData from './VirtualClassroomsViewData';
import './VirtualClassroomsView.scss';

export default function VirtualClassroomsView() {
  const { footer } = viewData;

  return (
    <div className='virtual_classrooms_view'>
      <VirtualClassroomsPanel />
      <ProgramFooter image={footer.image} title={footer.title}/>
    </div>
  );
}
