import React from 'react';
import PageHeader from 'components/PageHeader';
import InvolvementPanel from 'views/InvolvementPanel';
import './GetInvolvedPage.scss';
import pageData from './GetInvolvedPageData';
import { smoothlyScrollToElement } from 'utilities/dom';

const SCROLL_DURATION = 500;

export default class GetInvolvedPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedForm: 'VOLUNTEER'
    }
  }


  componentDidMount() {
    this.scrollToForms();
  }

  componentDidUpdate() {
    this.scrollToForms();
  }

  scrollToForms() {
    if (this.formsWrapperDiv) {
      smoothlyScrollToElement(this.formsWrapperDiv, SCROLL_DURATION);
    }
  }

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
            ref={div => this.formsWrapperDiv = div}
          >
            <InvolvementPanel
              selectedForm={this.state.selectedForm}
            />
          </div>

        </div>
      </div>
    );
  }
}
