import React from 'react';

import MemberViews from '../MemberViews';

import './MemberArray.scss';

export default class MemberArray extends React.Component {
  render() {
    function getMemberID(m) { return m.name.first + '_' + m.name.last; }

    const {
      members,
      showFullName
    } = this.props;

    const arrayStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }

    return (
      <div className='member_array' style={arrayStyles}>
        { members.map((m) =>
          <MemberViews
            key={getMemberID(m)}
            name={m.name.first + (showFullName ? (" " + m.name.last) : "")}
            memberID={m.name.first[0].toLowerCase() + '_' + m.name.last.toLowerCase()}
            position={m.position}
            description={m.description}
            blurb={m.blurb}
            college={m.college}
            links={m.links}
          />
        )}
      </div>
    );
  }
}
