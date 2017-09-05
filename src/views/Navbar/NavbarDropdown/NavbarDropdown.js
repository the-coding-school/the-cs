import { TweenMax } from 'gsap';
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { Link } from 'react-router-dom';
import pages from 'pages';
import './NavbarDropdown.scss';

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

  // Looks into the 'sections' property exported by each page component to see
  // what anchor-links that page makes available
  const relevantPage = pages.find(page => page.path === dropdownData.pagePath);
  const sections = relevantPage && relevantPage.sections;

  return (
    <ReactTransitionGroup
      className='navbar_dropdown_group'
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      { sections && (
        <Dropdown>
          { sections.map(section => (
            <div key={section.name} className='dropdown_option'>
              <Link to={`${dropdownData.pagePath}/${section.link}`} >
                {section.name}
              </Link>
            </div>
          ))}
        </Dropdown>
      )}
    </ReactTransitionGroup>
  );
}
