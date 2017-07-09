import React from 'react';

import DonationOption from './DonationOption';
import DonateCustom from './DonateCustom';

import donationOptions from './DonationOptions.json';
import { fundChildImage, fundClassroomImage, fundSchoolImage } from './images';

import './DonationsPanel.scss';

export default class DonationsPanel extends React.Component {
  render() {

    const {
      child,
      classroom,
      school
    } = donationOptions;

    const DESCRIPTION = 'Your gift empowers children with the skills and confidence necessary to become future leaders and problem solvers.'
    const TAX_MESSAGE = 'The Coding School is a 501c3 organization. Your gift is tax deductible to the extent allowed by the law. When you make a donation through PayPal, you will automatically receive a receipt that can be used for tax deduction purposes.  Our public charity number is 46-5097610.';

    return (
      <div className='donations_panel_wrapper'>
        <div className='donations_panel'>
          <div className='title'>Donate</div>
          <div className='message'>{DESCRIPTION}</div>
          <div className='donations_options'>
            <DonationOption
              amount={child.amount}
              category={child.category}
              imageSrc={fundChildImage}
              buttonID={child.buttonID}
            />

            <DonationOption
              amount={classroom.amount}
              category={classroom.category}
              imageSrc={fundClassroomImage}
              buttonID={classroom.buttonID}
            />

            <DonationOption
              amount={school.amount}
              category={school.category}
              imageSrc={fundSchoolImage}
              buttonID={school.buttonID}
            />
          </div>
          <DonateCustom />
          <div className='tax_message'>{TAX_MESSAGE}</div>
        </div>
      </div>
    );
  }
}
