import React from 'react';

export default class MemberCloseButton extends React.Component {
  render() {
    return (
      <div
        className='member_close_button'
        onClick={this.props.onClick}
      >
        <i className='fa fa-times-circle fa-2x'/>
      </div>
    );
  }
}
