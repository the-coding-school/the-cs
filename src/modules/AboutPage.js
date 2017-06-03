import React, { Component } from 'react';
import { TitledParagraphs, TitledContent, PageHeader, SectionHeader, Philosophies } from './Skeleton';
import '../scss/Skeleton.scss';
import '../scss/About.scss';
import '../scss/Philosophies.scss';
import dataJSON from '../json/data.json';

class AboutPage extends Component {
  render() {
    let missionP = dataJSON.paragraphs.ourMission;

    const aboutDOM = dataJSON.paragraphs.aboutPage.map(function(section) {
      return (
        <TitledParagraphs title={section.title} key={section.title} paragraphs={section.paragraphs} />
      );
    });

    const philosophyDOM = dataJSON.paragraphs.codingPhilosophy.map(function(section) {
      return (
        <TitledParagraphs title={section.title} key={section.title} paragraphs={section.paragraphs} />
      );

    });

    const header = dataJSON.headers.about;
    const image = process.env.PUBLIC_URL + header.image;

    return (
      <div className="about-app App">
        <PageHeader image={image} title={header.title} description={header.description} />
        <div className="aboutpage page">
          <div className="mission_statement">
            <TitledParagraphs title={missionP.title} paragraphs={missionP.paragraphs} />
          </div>
          <hr />
          <div className="about_statement"> {aboutDOM} </div>

          <SectionHeader title="Our Coding Philosophy" />
          <Philosophies />


        </div>
      </div>
    );
  }
}


export default AboutPage;
