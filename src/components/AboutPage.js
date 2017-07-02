import React, { Component } from "react";
import { TitledParagraphs, PageHeader, SectionHeader } from "./Skeleton";
import Philosophies from "./Philosophies";
import "../scss/Skeleton.scss";
import "../scss/Philosophies.scss";
import dataJSON from "../json/data.json";
import headers from "../json/headers.json";

class AboutPage extends Component {
  render() {
    let missionP = dataJSON.paragraphs.ourMission;

    const aboutDOM = dataJSON.paragraphs.aboutPage.map((section) => <TitledParagraphs title={section.title} key={section.title} paragraphs={section.paragraphs} /> );
    const missionDOM = <TitledParagraphs title={missionP.title} paragraphs={missionP.paragraphs} />

    const header = headers.about;
    const image = process.env.PUBLIC_URL + header.image;

    return (
      <div className="about-app App">
        <PageHeader image={image} title={header.title} description={header.description} />
        <div className="aboutpage page">
          <div className="mission_statement"> {missionDOM} </div>
          <div className="about_statement"> {aboutDOM} </div>
          <SectionHeader title="Our Coding Philosophy" />
          <Philosophies />
        </div>
      </div>
    );
  }
}


export default AboutPage;
