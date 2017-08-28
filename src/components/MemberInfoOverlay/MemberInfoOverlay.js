import React from 'react';

import MemberName from '../MemberName';
import MemberPosition from '../MemberPosition';
import MemberDescription from '../MemberDescription';

import "./MemberInfoOverlay.scss";

export default class MemberInfoOverlay extends React.Component {
  render() {
    const p = this.props
    return (
      <div className={`member_info_overlay ${p.description && 'hoverUp'}`}>
        <div className='member_main_info'>
          <MemberName name={p.name} />
          <MemberPosition position={p.position}/>
        </div>
        {p.description && <div className='member_secondary_info'>
          <MemberDescription description={p.description} />
        </div>}
      </div>
    )
  }
}
