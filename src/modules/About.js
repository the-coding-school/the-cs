import React, { Component } from 'react';
import { TitledParagraphs } from './Skeleton';
import '../scss/App.scss';
import '../scss/About.scss';
import content from '../json/about.json';

class About extends Component {
  render() {
    let contentDOM = content.aboutPage.map(function(section) {
      return (
        <TitledParagraphs title={section.title} key={section.title}
                          paragraphs={section.paragraphs} />
      );
    });

    return (
      <div className="about-app App">
        <div className="container">
          {contentDOM}
        </div>
      </div>
    );
  }
}

export default About;
