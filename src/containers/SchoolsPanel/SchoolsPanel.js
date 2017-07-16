import React from 'react';
import SectionHeader from 'components/SectionHeader'
import IconPanel from 'components/IconPanel';
import 'css/animate.css';
import schools from './SchoolsData';

class SchoolsPanel extends React.Component {
  render() {
    return (
      <div className='schools_panel'>
        <SectionHeader title='School Districts We Have Coding Programs In' />
        <IconPanel items={schools} />
      </div>
    );
  }
}

export default SchoolsPanel;
