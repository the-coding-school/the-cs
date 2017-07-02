import React from 'react';
import IconPanel from '../../components/IconPanel';
import partners from './partners.json';

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
        <IconPanel items={partners} />
      </div>
    );
  }
}
