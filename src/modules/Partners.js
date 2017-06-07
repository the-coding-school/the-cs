import React, { Component } from 'react';
import { TitledParagraphs } from './Skeleton';
import '../scss/Skeleton.scss';
import "../scss/Partners.scss";
import '../css/animate.css';
import dataJSON from '../json/data.json';

export class Partners extends Component {
  render() {
    const pP = dataJSON.paragraphs.partnershipsIntro;
    return (
      <div className="partners_section">
        <TitledParagraphs title={pP.title} paragraphs={pP.paragraphs} />
        <PartnersPanel />
      </div>
    );
  }
}

export class PartnersPanel extends Component {
  render() {

    function sortPartners(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }

    const partnersDOM = dataJSON.partners.sort(sortPartners).map((p) => {
      const imageSrc = process.env.PUBLIC_URL + "/images/partners/" + p.imageName;
      return <Partner key={p.name} imageSrc={imageSrc} name={p.name} description={p.description} link={p.link}/>
    });

    return (
      <div className="partners">
        {partnersDOM}
      </div>
    );
  }
}

class Partner extends Component {
  render() {
    const p = this.props;
    return (
      <div className="partner_wrapper">
        <a href={p.link}>
        <div className="partner wow fadeIn">
          <img src={p.imageSrc} alt="partner" width="180" height="180" />
          <div className="partner_description"><p>{p.name}</p></div>
        </div>
        </a>
      </div>
    );
  }
}
