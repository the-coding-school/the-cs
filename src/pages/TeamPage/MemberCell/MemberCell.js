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
      position,
      description,
      college,
      images
    } = this.props;

    return (
      <div className='member_cell_wrapper wow fadeInUp' onClick={onClick}>
        <div className='member_cell'>
          <MemberImage
            background={false}
            images={images}
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
