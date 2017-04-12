import React, { Component } from 'react';
import { TitledParagraphs, PageHeader } from './Skeleton';
import '../scss/App.scss';
import '../scss/About.scss';
import dataJSON from '../json/data.json';

class About extends Component {
  render() {
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
          {contentDOM}
        </div>
      </div>
    );
  }
}

export default About;
