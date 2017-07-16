import React from 'react';
import PageHeader from 'components/PageHeader';
import DonationsPanel from 'containers/DonationsPanel';

import './DonatePage.scss';

import pageData from './DonatePage.json';
import headerImage from './DonatePage.jpg';

export default class DonatePage extends React.Component {
  render() {
    const {
      header
    } = pageData;

    return (
      <div className='donate_page page'>
        <PageHeader image={headerImage} title={header.title} description={header.description} />
        <div className='page_contents'>

        <DonationsPanel />

        </div>
      </div>
    );
  }
}
