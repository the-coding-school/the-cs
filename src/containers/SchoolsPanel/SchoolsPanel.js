import React from 'react';
import IconPanel from '../../components/IconPanel';
import '../../css/animate.css';
import schools from './schools.json';

class SchoolsPanel extends React.Component {
  render() {

    // Don't sort in-code, sort order defined arbitrarily in JSON
    schools.forEach(function(s){
      s.imageURL = process.env.PUBLIC_URL + '/images/schools/' + s.imageName;
    });

    return (
      <div className='schools_panel'>
        <IconPanel items={schools} />
      </div>
    );
  }
}

export default SchoolsPanel;
