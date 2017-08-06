import React from 'react';
import { TweenMax } from 'gsap';
import { Link } from 'react-router';
import './NavbarDropdown.scss';

import ReactTransitionGroup from 'react-addons-transition-group';

class Dropdown extends React.Component {

  componentWillEnter (callback) {
    TweenMax.fromTo(
      this.container,
      0.3,
      {
        y: -this.container.offsetHeight
      },
      {
        y: 0,
        onComplete: callback
      }
    );
  }

  componentWillLeave (callback) {
    TweenMax.fromTo(
      this.container,
      0.3,
      {
        y: 0
      },
      {
        y: -this.container.offsetHeight,
        onComplete: callback
      }
    );
  }

  render() {
    return (
      <div
        ref={c => this.container = c}
        className='navbar_dropdown'
        key='dropdown'
      >
        { this.props.children }
      </div>
    );
  }
}

export default function NavbarDropdown(props) {

  const {
    dropdownData,
    setHoverState
  } = props;

  return (
    <ReactTransitionGroup
      className='navbar_dropdown_group'
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      { dropdownData && dropdownData.sections && (
        <Dropdown>
          { dropdownData.sections.map(section => (
            <div key={section.name} className='dropdown_option'>
              <Link to={dropdownData.pagePath + section.link}>
                {section.name}
              </Link>
            </div>
          ))}
        </Dropdown>
      )}
    </ReactTransitionGroup>
  );
}
