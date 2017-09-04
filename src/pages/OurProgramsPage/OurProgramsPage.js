import React from 'react';
import { LinkScrollPage, Anchor, createAnchorId } from 'components/LinkScrollPage';
import TitledParagraphs from 'components/TitledParagraphs';
import PageHeader from 'components/PageHeader';
import pageData from './OurProgramsPageData';

export default class OurProgramsPage extends LinkScrollPage {
  render() {
    const { header } = pageData;

    return (
      <div className='our_programs_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description}/>
        <div className='page_contents'>
          {
            pageData.ourPrograms.map(paragraph => (
              <div key={paragraph.title}>
                <Anchor
                  pageMap={this.pageMap}
                  id={createAnchorId(paragraph.title)}
                />
                <TitledParagraphs
                  title={paragraph.title}
                  subtitle={paragraph.subtitle}
                  paragraphs={paragraph.paragraphs}
                />

              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
