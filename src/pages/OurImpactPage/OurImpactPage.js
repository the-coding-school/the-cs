import React from 'react';
import TitledParagraphs from 'components/TitledParagraphs';
import TitledContent from 'components/TitledContent';
import PageHeader from 'components/PageHeader';
import SectionHeader from 'components/SectionHeader';
import StatisticsPanel from 'views/StatisticsPanel';
import { generateIdFromString } from 'utilities/dom';

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
                const {
                  title,
                  subtitle,
                  paragraphs
                } = i;
                const paragraphsDOM = <div className='text_block' dangerouslySetInnerHTML={{__html: i.paragraphs}} />
                let tpDOM = null;
                if ("subtitle" in i) {
                  tpDOM = <TitledContent title={title} subtitle={subtitle} content={paragraphsDOM} />
                } else {
                  tpDOM = <TitledContent title={title} content={paragraphsDOM} />
                }
                return (
                  <div
                    id={generateIdFromString(title)}
                    className="titled_paragraphs"
                  > {tpDOM} </div>
                );
              })
            }
          </div>

        </div>
      </div>
    );
  }
}
