import React from 'react';

import MemberCell from '../MemberCell';
import MemberCard from '../MemberCard';

import './MemberViews.scss';

export default class MemberViews extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !(this.state.isOpen)
    });
  }

  preventClick(event) {
    event.stopPropagation();
  }

  render() {
    const {
      name,
      memberID,
      position,
      description,
      college,
      blurb,
      links
    } = this.props;

    const modalStyles = {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      top: '0',
      left: '0',
      zIndex: '300',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const bgStyles = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
    }

    return (
      <div className='member_views' style={{position: 'relative'}}>
        <MemberCell
          onClick={this.toggleModal}
          name={name}
          memberID={memberID}
          position={position}
          description={description}
          college={college}
        />

        { this.state.isOpen &&
          <div className='modal_container' style={modalStyles}>
            <div className='modal_background' style={bgStyles} onClick={this.toggleModal}/>
            <div className='modal_content' onClick={this.preventClick}>
              <MemberCard
                modal={true}
                onClick={this.toggleModal}
                name={name}
                memberID={memberID}
                position={position}
                description={description}
                blurb={blurb}
                college={college}
                links={links}
              />
            </div>
          </div>
        }


      </div>
    );
  }
}
