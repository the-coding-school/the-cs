import React from 'react';

export default class MemberPosition extends React.Component {
  render() {
    return (
      <div className='member_position'> {this.props.position} </div>
    );
  }
}
