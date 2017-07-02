import React from 'react';
import TitledParagraphs from '../../components/TitledParagraphs';
import PageHeader from '../../components/PageHeader';
import SectionHeader from '../../components/SectionHeader';
import StatisticsPanel from '../../containers/StatisticsPanel';

import pageData from './OurFootprintPage.json';
import headerImage from './OurFootprintPage.jpg';

export default class OurFootprintPage extends React.Component {
  render() {
    const header = pageData.header;

    const uniqueDOM = pageData.paragraphs.ourUniqueApproach.map(function(p) {
      return <TitledParagraphs key={p.title} title={p.title} paragraphs={p.paragraphs} />
    });

    return (
      <div className='App'>
        <PageHeader image={headerImage} title={header.title} description={header.description}/>
        <div className='our_footprint_page page'>
          <StatisticsPanel />
          <hr/>

          <div className='our_footprint'>
            {
              pageData.paragraphs.ourImpact.map(function(i) {
                return <TitledParagraphs key={i.title} title={i.title} paragraphs={i.paragraphs} />
              })
            }
          </div>

          <SectionHeader title={'Our Unique Approach'} />

          <div className='our_unique_approach'>

            {uniqueDOM}
          </div>

        </div>
      </div>
    );
  }
}
