import './NavPanel.scss';
import React from 'react';

import NavItem from '../NavItem';

export default function NavPanel(props) {

  const panelItems = props.items.map((item, index) => (
    <NavItem
      key={item.path}
      item={item}
      onClick={props.onItemClick}
    />
  ));

  return (
    <div className='nav_panel'>
      {panelItems}
    </div>
  );
}
