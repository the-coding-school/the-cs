// @flow

import React from 'react';
import { LinkScrollPage, Anchor } from 'components/LinkScrollPage';
import TitledParagraphs from 'components/TitledParagraphs';
import PageHeader from 'components/PageHeader';
import SectionHeader from 'components/SectionHeader';
import StatisticsPanel from 'views/StatisticsPanel';
import pageData from './OurImpactPageData';

export default class OurImpactPage extends LinkScrollPage {
  render() {
    const header = pageData.header;

    const uniqueDOM = pageData.paragraphs.ourUniqueApproach.map(function(p) {
      return <TitledParagraphs key={p.title} title={p.title} paragraphs={p.paragraphs} />
    });

    return (
      <div className='our_impact_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description}/>
        <div className='page_contents'>
          <StatisticsPanel />
          <hr/>

          <Anchor pageMap={this.pageMap}  id='ourimpact' />
          <div className='our_impact'>
            {
              pageData.paragraphs.ourImpact.map(function(i) {
                return <TitledParagraphs key={i.title} title={i.title} paragraphs={i.paragraphs} />
              })
            }
          </div>

          <Anchor pageMap={this.pageMap}  id='ouruniqueapproach' />
          <SectionHeader title={'Our Unique Approach'} />

          <div className='our_unique_approach'>
            {uniqueDOM}
          </div>

        </div>
      </div>
    );
  }
}
