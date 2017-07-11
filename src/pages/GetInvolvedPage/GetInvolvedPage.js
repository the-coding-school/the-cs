import React from 'react';
import PageHeader from '../../components/PageHeader';
import InvolvementPanel from '../../containers/InvolvementPanel';

import './GetInvolvedPage.scss';

import pageData from './GetInvolvedPageData';

export default class GetInvolvedPage extends React.Component {
  render() {
    const header = pageData.header;

    return (
      <div className='App'>
        <PageHeader image={header.image} title={header.title} description={header.description} />
        <div className='getinvolved_page page'>

          <div className='involvement_panel_wrapper'>
            <InvolvementPanel />
          </div>

        </div>
      </div>
    );
  }
}
