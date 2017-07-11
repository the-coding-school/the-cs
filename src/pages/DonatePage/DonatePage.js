import React from 'react';
import PageHeader from '../../components/PageHeader';
import DonationsPanel from '../../containers/DonationsPanel';

import './DonatePage.scss';

import pageData from './DonatePageData';

export default class DonatePage extends React.Component {
  render() {
    const header = pageData.header;

    return (
      <div className='App'>
        <PageHeader image={header.image} title={header.title} description={header.description} />
        <div className='donate_page page'>

        <DonationsPanel />

        </div>
      </div>
    );
  }
}
