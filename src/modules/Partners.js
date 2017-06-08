import React, { Component } from 'react';
import { TitledParagraphs } from './Skeleton';
import IconPanel from "./IconPanel";
import '../scss/Skeleton.scss';
import "../scss/IconPanel.scss";
import '../css/animate.css';
import dataJSON from '../json/data.json';

class PartnersPanel extends Component {
  render() {

    function sortPartners(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }

    const sortedPartners = dataJSON.partners.sort(sortPartners)
    sortedPartners.forEach(function(i){
      i.imageURL = process.env.PUBLIC_URL + "images/partners/" + i.imageName;
    });

    return (
      <div className="partners_panel">
        <IconPanel items={sortedPartners} />
      </div>
    );
  }
}

export default PartnersPanel;
