import React from 'react';

import SectionHeader from '../../components/SectionHeader';
import IconPanel from '../../components/IconPanel';

import schools from './schools.json';

class SchoolsPanel extends React.Component {
  render() {

    // Don't sort in-code, sort order defined arbitrarily in JSON
    schools.forEach(function(s){
      s.imageURL = process.env.PUBLIC_URL + '/images/schools/' + s.imageName;
    });

    return (
      <div className='schools_panel'>
        <SectionHeader title='School Districts We Have Coding Programs In' />
        <IconPanel items={schools} />
      </div>
    );
  }
}

export default SchoolsPanel;
