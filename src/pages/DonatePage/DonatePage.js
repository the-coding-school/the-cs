import React from 'react';
import PageHeader from 'components/PageHeader';
import DonationsPanel from 'views/DonationsPanel';

import './DonatePage.scss';

import pageData from './DonatePageData';

export default class DonatePage extends React.Component {
  render() {
    const {
      header
    } = pageData;

    return (
      <div className='donate_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description} />
        <div className='page_contents'>

        <DonationsPanel />

        </div>
      </div>
    );
  }
}
