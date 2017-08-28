import React from 'react';

import MemberImage from '../MemberImage';
import MemberInfoOverlay from '../MemberInfoOverlay';
import MemberOrganizationBar from '../MemberOrganizationBar';

import "./MemberCell.scss";

export default class MemberCell extends React.Component {
  render() {
    const {
      onClick,
      name,
      position,
      description,
      organization,
      images
    } = this.props;

    return (
      <div className='member_cell_wrapper' onClick={onClick}>
        <div className='member_cell'>
          <MemberImage
            isSquare={true}
            images={images}
          />
          <MemberInfoOverlay
            name={name}
            position={position}
            description={description}
          />
        </div>
        <MemberOrganizationBar organization={organization} />
      </div>
    )
  }
}
