import React from 'react';
import TitledParagraphs from 'components/TitledParagraphs';
import PageHeader from 'components/PageHeader';
import SectionHeader from 'components/SectionHeader';
import StatisticsPanel from 'views/StatisticsPanel';

import pageData from './OurFootprintPageData';

export default class OurFootprintPage extends React.Component {
  render() {
    const header = pageData.header;

    const uniqueDOM = pageData.paragraphs.ourUniqueApproach.map(function(p) {
      return <TitledParagraphs key={p.title} title={p.title} paragraphs={p.paragraphs} />
    });

    return (
      <div className='our_footprint_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description}/>
        <div className='page_contents'>
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
