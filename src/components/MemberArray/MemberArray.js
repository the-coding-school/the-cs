import React from 'react';

import MemberViews from '../MemberViews';

import './MemberArray.scss';

export default class MemberArray extends React.Component {
  render() {

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
            key={m.name.first + '_' + m.name.last}
            name={m.name.first + (showFullName ? (" " + m.name.last) : "")}
            position={m.position}
            description={m.description}
            blurb={m.blurb}
            organization={m.organization}
            images={m.images}
            links={m.links}
          />
        )}
      </div>
    );
  }
}
