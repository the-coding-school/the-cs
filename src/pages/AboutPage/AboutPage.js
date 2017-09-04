import React from 'react';
import { LinkScrollPage, Anchor, createAnchorId } from 'components/LinkScrollPage';
import PageHeader from 'components/PageHeader';
import TitledParagraphs from 'components/TitledParagraphs';
import SectionHeader from 'components/SectionHeader';
import Philosophies from 'views/Philosophies';
import pageData from './AboutPageData';

class AboutPage extends LinkScrollPage {
  render() {

    const { header } = pageData;

    return (
      <div className='about_page page'>
        <PageHeader
          image={header.image}
          title={header.title}
          description={header.description}
        />
        <div className='page_contents'>
          <div className='about_statement'>
            {
              pageData.paragraphs.map(section => (
                <div>
                  <Anchor
                    pageMap={this.pageMap}
                    id={createAnchorId(section.title)}
                  />
                  <TitledParagraphs
                    key={section.title}
                    title={section.title}
                    paragraphs={section.paragraphs}
                  />
                </div>
              ))
            }
          </div>
          <Anchor pageMap={this.pageMap} id='ourphilosophy' />
          <SectionHeader title='Our Philosophy' />
          <Philosophies />
        </div>
      </div>
    );
  }
}


export default AboutPage;
