import './NavbarTabs.scss';
import React from 'react';

import NavItem from '../NavItem';

export default class NavbarTabs extends React.Component {
  render() {

    const someTabHovered = (typeof this.props.hoveredTab === 'number');

    const navItems = this.props.tabItems.map((item, index) => (
      <NavItem
        key={item.path}
        item={item}
        hovered={index === this.props.hoveredTab}
        onMouseEnter={() => this.props.setHoveredTab(index)}
        onMouseLeave={() => this.props.setHoveredTab(null)}
      />
    ));

    return (
      <div className='navbar_tabs_wrapper'>
        <div className='navbar_tabs'>
          <div
            className={`navbar_tab_items ${someTabHovered ? 'hovered' : ''}`}
          >
            {navItems}
          </div>
        </div>
      </div>
    );
  }
}
