import React from 'react';
import PageHeader from '../../components/PageHeader';
import InvolvementPanel from '../../containers/InvolvementPanel';

import './GetInvolvedPage.scss';

import pageData from './GetInvolvedPage.json';
import headerImage from './GetInvolvedPage.jpg';

export default class GetInvolvedPage extends React.Component {
  render() {
    const {
      header
    } = pageData;

    // TODO: Add form links for all sections once created

    return (
      <div className='App'>
        <PageHeader image={headerImage} title={header.title} description={header.description} />
        <div className='getinvolved_page page'>

          <div className='involvement_panel_wrapper'>
            <InvolvementPanel />
          </div>

        </div>
      </div>
    );
  }
}
