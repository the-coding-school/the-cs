import React from 'react';

import SectionHeader from 'components/SectionHeader';
import IconPanel from 'components/IconPanel';

import partners from './partners.json';

import './PartnersPanel.scss';

export default class PartnersPanel extends React.Component {
  render() {

    partners.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }).forEach(function(p){
      p.imageURL = process.env.PUBLIC_URL + 'images/partners/' + p.imageName;
    });

    return (
      <div className='partners_panel'>
        <SectionHeader title='Our Partners' />
        <IconPanel items={partners} />
        <p>In addition, The Coding School is proud to have been awarded the Brown Venture Launch Fund from Brown University Social Innovation Initiative.</p>
      </div>
    );
  }
}
