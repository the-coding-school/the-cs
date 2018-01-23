// @flow

import React from 'react';
import PageHeader from 'components/PageHeader';
import InvolvementPanel from 'views/InvolvementPanel';
import './GetInvolvedPage.scss';
import pageData from './GetInvolvedPageData';
import { smoothlyScrollToElement } from 'utilities/dom';

const SCROLL_DURATION = 500;

type PropsType = {};

export default class GetInvolvedPage extends React.Component<PropsType> {
  formsWrapperDiv: ?HTMLDivElement;

  render() {
    const {
      header
    } = pageData;

    return (
      <div className='get_involved_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description} />
        <div className='page_contents'>

          <div
            className='involvement_panel_wrapper'
            ref={(div: ?HTMLDivElement) => this.formsWrapperDiv = div}
          >
            <InvolvementPanel />
          </div>

        </div>
      </div>
    );
  }
}
