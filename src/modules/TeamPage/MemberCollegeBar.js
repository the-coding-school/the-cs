import React from 'react';

export default class MemberCollegeBar extends React.Component {
  render() {
    const college = this.props.college;
    const collegeID = college.toLowerCase().split(" ").join("_");
    return (
      <div className={"member_college " + collegeID}>{college}</div>
    )
  }
}
