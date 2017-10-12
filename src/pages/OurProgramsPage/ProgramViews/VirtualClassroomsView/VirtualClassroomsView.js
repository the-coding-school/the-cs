// @flow

import React from 'react';
import VirtualClassroomsPanel from 'views/VirtualClassroomsPanel';
import ProgramFooter from 'components/ProgramFooter';
import './VirtualClassroomsView.scss';

export default function VirtualClassroomsView() {
  return (
    <div className='virtual_classrooms_view'>
      <VirtualClassroomsPanel />
      <ProgramFooter image={require('./header.jpg')} title={'With our video chat and collaborative editing platform, we can bring our instructors and year-long courses into entire classrooms. This is especially beneficial for schools located in rural communities.'}/>
    </div>
  );
}
