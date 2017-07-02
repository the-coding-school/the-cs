import React from 'react';

import MemberImage from '../MemberImage';
import MemberInfoOverlay from '../MemberInfoOverlay';
import MemberCollegeBar from '../MemberCollegeBar';

import "./MemberCell.scss";

export default class MemberCell extends React.Component {
  render() {
    const {
      onClick,
      name,
      memberID,
      position,
      description,
      college
    } = this.props;

    return (
      <div className='member_cell_wrapper' onClick={onClick}>
        <div className='member_cell wow fadeIn'>
          <MemberImage
            background={false}
            imageID={memberID}
          />
          <MemberInfoOverlay
            name={name}
            position={position}
            description={description}
            />
        </div>
        <MemberCollegeBar college={college} />
      </div>
    )
  }
}
