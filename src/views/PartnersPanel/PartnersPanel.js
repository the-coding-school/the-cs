import React from 'react';

import IconPanel from 'components/IconPanel';

import partners from './PartnersData.js';

import './PartnersPanel.scss';

export default class PartnersPanel extends React.Component {
  render() {

    partners.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })

    return (
      <div className='partners_panel'>
        <IconPanel items={partners} />
      </div>
    );
  }
}
