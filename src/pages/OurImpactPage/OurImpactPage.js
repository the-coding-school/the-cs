import React from 'react';
import TitledParagraphs from 'components/TitledParagraphs';
import PageHeader from 'components/PageHeader';
import SectionHeader from 'components/SectionHeader';
import StatisticsPanel from 'views/StatisticsPanel';

import pageData from './OurImpactPageData';

export default class OurImpactPage extends React.Component {
  render() {
    const header = pageData.header;

    return (
      <div className='our_impact_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description}/>
        <div className='page_contents'>
          <StatisticsPanel />
          <hr/>

          <div className='our_impact'>
            {
              pageData.paragraphs.ourImpact.map(function(i) {
                return <TitledParagraphs key={i.title} title={i.title} paragraphs={i.paragraphs} />
              })
            }
          </div>

          <SectionHeader title={'Our Unique Approach'} />

          <div className='our_unique_approach'>
            {
              pageData.paragraphs.ourUniqueApproach.map(function(i) {
                return <TitledParagraphs key={i.title} title={i.title} paragraphs={i.paragraphs} />
              })
            }
          </div>

          <SectionHeader title={'Testimonials'} />

          <div classname='testimonials'>
            {
              pageData.paragraphs.testimonials.map(function(i) {
                return <TitledParagraphs key={i.title} title={i.title} paragraphs={i.paragraphs} />
              })
            }
          </div>

        </div>
      </div>
    );
  }
}
