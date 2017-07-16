import React from 'react';

import './DonateCustom.scss';
import 'scss/General.scss';

const DEFAULT_DONATION = 25;

export default class DonateCustom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      donationAmount: DEFAULT_DONATION
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

    const EMAIL = "info@the-cs.org";
    const MESSAGE = "Or donate a custom amount. Any donation helps.";
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
            className="input_field"
            type='text'
            value={'$' + numberWithCommas(this.state.donationAmount)}
            onChange={this.updateAmount.bind(this)}
          />

          <input className="button" type='submit' value='Donate' />
        </form>
      </div>

    );
  }
}
