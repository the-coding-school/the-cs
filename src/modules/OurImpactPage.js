import React, { Component } from 'react';
import '../scss/Skeleton.scss';
import { TitledContent, TitledParagraphs, PageHeader, SectionHeader, LinkButton } from './Skeleton';
import dataJSON from '../json/data.json';

class OurImpactPage extends Component {
  render() {

    const programs = dataJSON.paragraphs.ourImpact;

    const header = dataJSON.headers.ourImpact;
    const image = process.env.PUBLIC_URL + header.image;
    const linkButton = <LinkButton text="Sign up!" link="https://www.google.com/" />
    return (
      <div className="App">
        <PageHeader image={image} title={header.title} description={header.description}/>
        <div className="ourimpact_page page">
          <Statistics />
          <SectionHeader title={"Our Footprint"} />
          <OurImpact />
          <SectionHeader title={"Our Unique Approach"} />
          <OurUniqueApproach />
        </div>
      </div>
    );
  }
}

class Statistics extends Component {
  render() {
    const statsIconRoot = process.env.PUBLIC_URL + "/images/statistics/";
    return (
      <div className="statistics">
        {
          dataJSON.statistics.map(function(s) {
            return <Statistic key={s.description} imageSrc={statsIconRoot + s.imageName} number={s.number} description={s.description} />
          })
        }
      </div>
    )
  }
}

class Statistic extends Component {
  render() {
    const p = this.props;
    return (
      <div className="statistic wow zoomIn">
        <img alt="statistic" src={p.imageSrc} width="80" height="80" />
        <h2>{p.number}</h2>
        <p>{p.description}</p>
      </div>
    );
  }
}

class OurImpact extends Component {
  render() {
    return (
      <div className="our_impact">
        {
          dataJSON.paragraphs.ourImpact.map(function(i) {
            return <TitledParagraphs key={i.title} title={i.title} paragraphs={i.paragraphs} />
          })
        }
      </div>
    );
  }
}

class OurUniqueApproach extends Component {
  render() {

    const uniqueDOM = dataJSON.paragraphs.ourUniqueApproach.map(function(p) {
      return <TitledParagraphs key={p.title} title={p.title} paragraphs={p.paragraphs} />
    });

    return (
      <div className="our_unique_approach">

        {uniqueDOM}
      </div>
    );
  }
}

export default OurImpactPage;
