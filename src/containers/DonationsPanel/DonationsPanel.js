import React from 'react';

import DonationOption from './DonationOption';
import DonateCustom from './DonateCustom';

import donationsData from './DonationsData';

import './DonationsPanel.scss';

export default class DonationsPanel extends React.Component {
  render() {

    const {
      message,
      taxMessage,
      options
    } = donationsData;

    return (
      <div className='donations_panel_wrapper'>
        <div className='donations_panel'>
          <div className='title'>Donate</div>
          <div className='message'>{message}</div>
          <div className='donations_options'>
            {
              options.map((o) => (
                <DonationOption
                  amount={o.amount}
                  category={o.category}
                  image={o.image}
                  buttonID={o.buttonID}
                />
              ))
            }
          </div>
          <DonateCustom />
          <div className='tax_message'>{taxMessage}</div>
        </div>
      </div>
    );
  }
}
