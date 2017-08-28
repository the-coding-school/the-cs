import React from 'react';

import './MemberName.scss';

export default class MemberName extends React.Component {
  render() {
    return (
      <div className='member_name'> {this.props.name} </div>
    );
  }
}
