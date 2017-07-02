import React from 'react';
import TitledParagraphs from '../../components/TitledParagraphs';
import PageHeader from '../../components/PageHeader';
import PartnersPanel from '../../containers/PartnersPanel';
import DonationsPanel from '../../containers/DonationsPanel';

import './GetInvolvedPage.scss';

import pageData from './GetInvolvedPage.json';
import headerImage from './GetInvolvedPage.jpg';

export default class GetInvolvedPage extends React.Component {
  render() {
    const {
      header,
      partnerships,
      schools,
      volunteer
    } = pageData;

    // TODO: Add form links for all sections once created

    return (
      <div className='App'>
        <PageHeader image={headerImage} title={header.title} description={header.description} />
        <div className='getinvolved_page page'>

          <DonationsPanel />

          <div className='partners_section'>
            <TitledParagraphs
              title={partnerships.paragraphs.title}
              paragraphs={partnerships.paragraphs.paragraphs}
            />
            <PartnersPanel />
          </div>

          <div className='schools_section'>
            <TitledParagraphs
            title={schools.paragraphs.title}
            paragraphs={schools.paragraphs.paragraphs}
            />
          </div>

          <div className='volunteer_section'>
            <TitledParagraphs
            title={volunteer.paragraphs.title}
            paragraphs={volunteer.paragraphs.paragraphs}
            />
          </div>

        </div>
      </div>
    );
  }
}
