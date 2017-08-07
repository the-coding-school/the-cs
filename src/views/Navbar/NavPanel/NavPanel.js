import './NavPanel.scss';
import React from 'react';
import { TweenMax } from 'gsap';
import NavItem from '../NavItem';
import NavbarHamburger from '../NavbarHamburger';

export default function NavPanel(props) {

  const {
    showPanel,
    items,
    onItemClick,
    onHamburgerClick
  } = props;

  const panelItems = items.map(item => (
    <NavItem
      key={item.path}
      item={item}
      onClick={onItemClick}
    />
  ));

  return (
    <div
      className={`nav_panel ${showPanel ? 'panel_open' : ''}`}
    >
      <div className='panel_items'>
        {panelItems}
      </div>

      <NavbarHamburger
        onClick={onHamburgerClick}
      />
    </div>
  );
}
