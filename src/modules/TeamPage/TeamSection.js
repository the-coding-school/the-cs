import React from 'react';

import MemberArray from './MemberArray';

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
        <h1 className='team_section_title'>{title}</h1>
        <MemberArray
          members={members}
          fullName={showFullName}
          />
      </div>
    );
  }
}
