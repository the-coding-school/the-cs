import React, { Component } from "react";
import "../scss/Skeleton.scss";
import "../scss/OurPrograms.scss";
import { TitledParagraphs, PageHeader } from "./Skeleton";
import dataJSON from "../json/data.json";
import headers from "../json/headers.json";

class OurProgramsPage extends Component {
  render() {

    const programs = dataJSON.paragraphs.ourPrograms;

    const programsDOM = programs.map(function(p) {
      return (
          <TitledParagraphs key={p.title} title={p.title} subtitle={p.subtitle} paragraphs={p.paragraphs} />
      );
    });

    const header = headers.ourPrograms;
    const image = process.env.PUBLIC_URL + header.image;
    return (
      <div className="App">
        <PageHeader image={image} title={header.title} description={header.description}/>
        <div className="signuppage page">
          {programsDOM}
        </div>
      </div>
    );
  }
}

export default OurProgramsPage;
