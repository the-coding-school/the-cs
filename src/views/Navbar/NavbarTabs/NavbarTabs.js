import './NavbarTabs.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarHamburger from '../NavbarHamburger';

export default class NavbarTabs extends React.Component {
  render() {

    const someTabHovered = (typeof this.props.hoveredTab === 'number');

    const navItems = this.props.tabItems.map((item, index) => (
      <NavLink
        className={`
          nav_item
          nav_item_${item.name.toLowerCase().split(' ').join('_')}
          ${index === this.props.hoveredTab ? 'hovered' : ''}
        `}
        key={item.path}
        onMouseEnter={() => this.props.setHoveredTab(index)}
        onMouseLeave={() => this.props.setHoveredTab(null)}
        to={item.path}
        activeClassName='selected'
      >
        {item.name.toUpperCase()}
      </NavLink>
    ));

    return (
      <div className='navbar_tabs_wrapper'>
        <div className='navbar_tabs_large'>
          <div
            className={`navbar_tab_items ${someTabHovered ? 'hovered' : ''}`}
          >
            {navItems}
          </div>
        </div>

        <div className='navbar_tabs_small'>
          <div className='logo'>
            THE CODING SCHOOL
          </div>

          <NavbarHamburger
            onClick={this.props.onHamburgerClick}
          />

        </div>

      </div>
    );
  }
}
