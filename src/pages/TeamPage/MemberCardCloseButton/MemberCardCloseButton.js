import React from 'react';

import './MemberCardCloseButton.scss';

export default class MemberCardCloseButton extends React.Component {
  render() {
    return (
      <div
        className='member_card_close_button'
        onClick={this.props.onClick}
      >
        Close
      </div>
    );
  }
}
