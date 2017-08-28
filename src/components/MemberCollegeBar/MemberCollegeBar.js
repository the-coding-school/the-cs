import React from 'react';

import './MemberCollegeBar.scss';

export default class MemberCollegeBar extends React.Component {
  render() {
    const college = this.props.college;
    const collegeID = college.toLowerCase().split(' ').join('_');
    return (
      <div className={'member_college_bar ' + collegeID}>{college}</div>
    )
  }
}
