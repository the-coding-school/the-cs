import React from 'react';
import PageHeader from 'components/PageHeader';
import InvolvementPanel from 'views/InvolvementPanel';

import './GetInvolvedPage.scss';

import pageData from './GetInvolvedPageData';

export default class GetInvolvedPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedForm: 'VOLUNTEER'
    }
  }


  componentDidMount() {

  }

  componentDidUpdate() {

  }

  goToHashRequestedForm() {
    const requestedForm = window.location.hash.substr(1);
  }

  render() {
    const {
      header
    } = pageData;

    return (
      <div className='get_involved_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description} />
        <div className='page_contents'>

          <div className='involvement_panel_wrapper'>
            <InvolvementPanel
              selectedForm={this.state.selectedForm}
            />
          </div>

        </div>
      </div>
    );
  }
}
