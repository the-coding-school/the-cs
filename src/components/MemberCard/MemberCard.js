import React from 'react';

import MemberImage from '../MemberImage';
import MemberOrganizationBar from '../MemberOrganizationBar';
import MemberName from '../MemberName';
import MemberPosition from '../MemberPosition';
import MemberDescription from '../MemberDescription';
import MemberBlurb from '../MemberBlurb';
import MemberLinks from '../MemberLinks';
import MemberCardCloseButton from '../MemberCardCloseButton';

import "./MemberCard.scss";

export default class MemberCard extends React.Component {
  render() {

    const {
      modal,
      onClick,
      name,
      position,
      description,
      blurb,
      organization,
      links,
      images
    } = this.props;

    return (
      <div className='member_card_wrapper'>
        <div className='member_card'>

        { modal && <MemberCardCloseButton onClick={onClick} /> }

        <div className='member_info_bar'>
          <MemberName name={name} />
          <div className='member_card_row'>
            <MemberPosition position={position} />
            <MemberLinks links={links} />
          </div>
        </div>

          <div className='member_card_row'>
            <div className='member_card_column'>
              <MemberImage isSquare={false} images={images} />
              <MemberOrganizationBar organization={organization} />
              {blurb && <MemberBlurb blurb={blurb}/> }
            </div>
            <div className='member_card_column'>
              <MemberDescription description={description} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
