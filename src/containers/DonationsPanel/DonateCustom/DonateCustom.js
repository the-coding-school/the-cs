import React from 'react';

import './DonateCustom.scss';

export default class DonateCustom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      donationAmount: 50
    }
  }

  updateAmount(event) {
    this.setState({
      donationAmount: event.target.value.replace(/\D/g,'')
    });
  }

  render() {

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const EMAIL = "info.thecodingschool@gmail.com";
    const MESSAGE = "Or donate a custom amount.";
    const DESCRIPTION = "Your gift empowers children with the skills and confidence necessary to become future leaders and problem solvers."

    return (
      <div className="donation_custom donation_option">
        <div className="message"> {MESSAGE} </div>
        <form method="POST" action="https://www.paypal.com/cgi-bin/webscr">
          <input type="hidden" name="business" value={EMAIL} />
          <input type="hidden" name="item_name" value={DESCRIPTION} />
          <input type="hidden" name="cmd" value="_donations" />

          {/*
            One input gets submitted with form, one is shown to user
            Necessary redundancy in order to show $ sign and commas
          */}

          <input
            type='hidden'
            name='amount'
            value={this.state.donationAmount}
          />

          <input
            className="donation_text_field"
            type='text'
            value={'$' + numberWithCommas(this.state.donationAmount)}
            onChange={this.updateAmount.bind(this)}
          />

          <input className="donation_button" type='submit' value='Donate' />
        </form>
      </div>

    );
  }
}
