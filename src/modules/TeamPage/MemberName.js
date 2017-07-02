import React from 'react';

export default class MemberName extends React.Component {
  render() {
    return (
      <div className='member_name'> {this.props.name} </div>
    );
  }
}
