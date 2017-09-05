import './NavPanel.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHamburger from '../NavbarHamburger';

export default function NavPanel(props) {

  const {
    showPanel,
    items,
    onItemClick,
    onHamburgerClick
  } = props;

  const panelItems = items.map(item => (
    <Link
      className='nav_item'
      key={item.path}
      to={item.path}
      onClick={onItemClick}
    >
      {item.name.toUpperCase()}
    </Link>
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
