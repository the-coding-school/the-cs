import React from 'react';

export default class MemberDescription extends React.Component {
  render() {
    return (
      <div className="member_description"> {this.props.description} </div>
    );
  }
}
