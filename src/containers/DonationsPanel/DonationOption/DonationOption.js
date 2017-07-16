import React from 'react';

import DonationButton from '../DonationButton';

import './DonationOption.scss';

export default class DonationOption extends React.Component {
  render() {
    const {
      amount,
      category,
      image,
      buttonID
    } = this.props;
    return (
      <div className='donation_option'>
        <img className='wow zoomIn' src={image} alt={'donate $' + amount}/>
        <DonationButton
          text={category + ' ($' + amount + ')'}
          buttonID={buttonID}
        />
      </div>
    );
  }
}
