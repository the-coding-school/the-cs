import React, { Component } from 'react';
import TitledParagraphs from 'components/TitledParagraphs';
import PageHeader from 'components/PageHeader';

import pageData from './OurProgramsPage.json';
import headerImage from './OurProgramsPage.jpg';

class OurProgramsPage extends Component {
  render() {

    const programsDOM = pageData.ourPrograms.map(function(p) {
      return (
          <TitledParagraphs key={p.title} title={p.title} subtitle={p.subtitle} paragraphs={p.paragraphs} />
      );
    });

    const header = pageData.header;

    return (
      <div className='App'>
        <PageHeader image={headerImage} title={header.title} description={header.description}/>
        <div className='signuppage page'>
          {programsDOM}
        </div>
      </div>
    );
  }
}

export default OurProgramsPage;
