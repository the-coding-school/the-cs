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
        <div className="about page container">
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

    const schoolIcon = process.env.PUBLIC_URL + "/images/school.png";
    const studentIcon = process.env.PUBLIC_URL + "/images/student.png";
    const groupIcon = process.env.PUBLIC_URL + "/images/group.png";
    const impact = dataJSON.ourImpact;
    const impactDOM = impact.map(function(i) {
      return <TitledParagraphs key={i.title} title={i.title} paragraphs={i.paragraphs} />
    })
    return (
      <div className="our_impact">
        {impactDOM}
        <hr/>
        <div className="statistics flex">
          <Statistic imageSrc={schoolIcon} number="16" description="schools" />
          <Statistic imageSrc={studentIcon} number="1,800" description="students" />
          <Statistic imageSrc={groupIcon} number="44%" description="minority students" />
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
