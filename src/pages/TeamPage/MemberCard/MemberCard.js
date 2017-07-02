import React from 'react';

import MemberImage from '../MemberImage';
import MemberCollegeBar from '../MemberCollegeBar';
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
      memberID,
      position,
      description,
      blurb,
      college,
      links
    } = this.props;

    const flexWrapperStyles = {
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    }
    const cardStyles = {
      position: 'relative',
      backgroundColor: 'white',
      borderRadius: '5px',
      boxShadow: '0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.2), 0 1px 8px 0 rgba(0,0,0,.12)',
      width: '80%',
      maxWidth: '800px',
      padding: '25px'
    }
    const rowStyles = {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
    }
    const colStyles = {
      display: 'flex',
      flexDirection: 'column',
    }
    const infoStyles = {
      marginBottom: '20px',
    }
    const flexStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }

    return (
      <div className='member_card_wrapper' style={flexWrapperStyles}>
        <div className='member_card' style={cardStyles}>

        { modal && <MemberCardCloseButton onClick={onClick} /> }

        <div className='member_info_bar' style={infoStyles}>
          <MemberName name={name} />
          <div style={flexStyle}>
            <MemberPosition position={position} color={'#333333'}/>
            <MemberLinks links={links} />
          </div>
        </div>

          <div className='member_card_row' style={rowStyles}>
            <div className='member_card_column' style={colStyles}>
              <MemberImage background={true} imageID={memberID} />
              <MemberCollegeBar college={college} />
              {blurb && <MemberBlurb blurb={blurb}/> }
            </div>
            <div className='member_card_column' style={colStyles}>
              <MemberDescription description={description} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
