import React from 'react';
import PageHeader from '../../components/PageHeader';
import TitledParagraphs from '../../components/TitledParagraphs';
import SectionHeader from '../../components/SectionHeader';
import Philosophies from '../../containers/Philosophies';

import pageData from './AboutPage.json'
import headerImage from './AboutPage.jpg';

class AboutPage extends React.Component {
  render() {

    const aboutDOM = pageData.paragraphs.map((section) => (
      <TitledParagraphs
        key={section.title}
        title={section.title}
        paragraphs={section.paragraphs}
      />
    ));

    const header = pageData.header;

    return (
      <div className='about-app App'>
        <PageHeader
          image={headerImage}
          title={header.title}
          description={header.description}
        />
        <div className='aboutpage page'>
          <div className='about_statement'> {aboutDOM} </div>
          <SectionHeader title='Our Philosophy' />
          <Philosophies />
        </div>
      </div>
    );
  }
}


export default AboutPage;
