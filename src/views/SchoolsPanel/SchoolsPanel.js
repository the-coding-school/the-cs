import React from 'react';

import IconPanel from 'components/IconPanel';

import schools from './SchoolsData.js';

class SchoolsPanel extends React.Component {
  render() {
    return (
      <div className='schools_panel'>
        <IconPanel items={schools} />
      </div>
    );
  }
}

export default SchoolsPanel;
