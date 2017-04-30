import React, { Component } from 'react';
import { TitledParagraphs, PageHeader } from './Skeleton';
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import '../scss/About.scss';
import dataJSON from '../json/data.json';

class About extends Component {
  render() {

    let missionDOM = dataJSON.ourMission.map(function(section) {
      return (
        <TitledParagraphs title={section.title} key={section.title}
                          paragraphs={section.paragraphs} />

      );
    });

    let contentDOM = dataJSON.aboutPage.map(function(section) {
      return (
        <TitledParagraphs title={section.title} key={section.title}
                          paragraphs={section.paragraphs} />

      );
    });

    const header = dataJSON.headers.about;
    const image = process.env.PUBLIC_URL + header.image;

    return (
      <div className="about-app App">
        <PageHeader image={image} title={header.title} description={header.description} />
        <div className="aboutpage page">
          <div className="mission_statement">
            {missionDOM}
          </div>
          <hr />
          <OurImpact />
          <hr />
          <div className="about_statement">
            {contentDOM}
          </div>
        </div>
      </div>
    );
  }
}

class OurImpact extends Component {
  render() {

    const iconRoot = process.env.PUBLIC_URL + "/images/statistics/";
    const impact = dataJSON.ourImpact;
    const impactDOM = impact.map(function(i) {
      return <TitledParagraphs key={i.title} title={i.title} paragraphs={i.paragraphs} />
    })
    const statistics = dataJSON.statistics;
    const statisticsDOM = statistics.map(function(s) {
      return <Statistic key={s.description} imageSrc={iconRoot + s.imageName} number={s.number} description={s.description} />
    });
    return (
      <div className="our_impact">
        {impactDOM}
        <hr/>
        <div className="statistics">
          {statisticsDOM}
        </div>

      </div>
    );
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

export default About;
