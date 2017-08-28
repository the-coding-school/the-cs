import React from 'react';

import SectionHeader from 'components/SectionHeader';
import MemberArray from '../MemberArray';

import "./TeamSection.scss";

export default class TeamSection extends React.Component {
  render() {

    const {
      teamType,
      title,
      members,
      showFullName
    } = this.props;

    return (
      <div className={teamType + ' team_section'}>
        <SectionHeader title={title} />
        <MemberArray
          members={members}
          showFullName={showFullName}
          />
      </div>
    );
  }
}
