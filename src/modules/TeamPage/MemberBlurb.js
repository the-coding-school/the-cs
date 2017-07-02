import React from 'react';

export default class MemberBlurb extends React.Component {
  render() {
    return (
      <div className="member_blurb"> {this.props.blurb} </div>
    );
  }
}
